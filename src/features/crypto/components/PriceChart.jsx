import React, { useRef, useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2';
import { Col, Row, Typography } from 'antd'
import 'chart.js/auto';

const { Title, Text } = Typography

const PriceChart = ({ coinHistory, currentPrice, coinName }) => {
    const chartRef = useRef(null);
    const [gradient, setGradient] = useState('rgba(59, 130, 246, 0.2)');

    const coinPrice = [];
    const coinTimestamp = [];

    const historyList = coinHistory?.data?.history || [];
    for (let i = historyList.length - 1; i >= 0; i -= 1) {
        coinPrice.push(historyList[i].price);
        coinTimestamp.push(new Date(historyList[i].timestamp * 1000).toLocaleDateString());
    }

    useEffect(() => {
        const chart = chartRef.current;
        if (chart) {
            const ctx = chart.ctx;
            const bgGradient = ctx.createLinearGradient(0, 0, 0, 400);
            bgGradient.addColorStop(0, 'rgba(59, 130, 246, 0.5)'); 
            bgGradient.addColorStop(1, 'rgba(59, 130, 246, 0)');
            setGradient(bgGradient);
        }
    }, [coinHistory]);

    const data = {
        labels: coinTimestamp,
        datasets: [
            {
                label: 'Price In USD',
                data: coinPrice,
                fill: true,
                backgroundColor: gradient,
                borderColor: '#3b82f6',
                borderWidth: 2,
                pointRadius: 0,
                pointHoverRadius: 6,
                pointBackgroundColor: '#ffffff',
                pointBorderColor: '#3b82f6',
                pointBorderWidth: 2,
                tension: 0.4, 
            }
        ]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false, 
            },
            tooltip: {
                backgroundColor: 'rgba(17, 24, 39, 0.9)',
                titleColor: '#fff',
                bodyColor: '#3b82f6',
                borderColor: 'rgba(255, 255, 255, 0.1)',
                borderWidth: 1,
                padding: 12,
                displayColors: false,
                callbacks: {
                    label: function(context) {
                        let label = context.dataset.label || '';
                        if (label) {
                            label += ': ';
                        }
                        if (context.parsed.y !== null) {
                            label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed.y);
                        }
                        return label;
                    }
                }
            }
        },
        scales: {
            x: {
                grid: {
                    display: false,
                    drawBorder: false,
                },
                ticks: {
                    maxTicksLimit: 7,
                    color: 'rgba(255, 255, 255, 0.5)',
                }
            },
            y: {
                grid: {
                    color: 'rgba(255, 255, 255, 0.05)',
                    drawBorder: false,
                },
                ticks: {
                    color: 'rgba(255, 255, 255, 0.5)',
                    callback: function(value) {
                        return '$' + value;
                    }
                }
            }
        },
        interaction: {
            mode: 'index',
            intersect: false,
        },
    };

    return (
        <div style={{ marginTop: '20px' }}>
            <Row className='chart-header'>
                <Title level={2} className='chart-title'>{coinName} Price Chart</Title>
                <Col className='price-container' style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                    <Text className='price-change' style={{ color: coinHistory?.data?.change > 0 ? '#10b981' : '#ef4444', fontSize: '1.2rem', fontWeight: 600 }}>
                        {coinHistory?.data?.change > 0 ? '+' : ''}{coinHistory?.data?.change}%
                    </Text>
                    <Text className='current-price' style={{ color: '#fff', fontSize: '1.2rem', fontWeight: 700 }}>
                        Current Price: ${currentPrice}
                    </Text>
                </Col>
            </Row>
            <Line ref={chartRef} options={options} data={data} />
        </div>
    )
}

export default PriceChart
