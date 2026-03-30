import React from "react"
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ConfigProvider, theme } from 'antd'

import App from "./App"
import store from './app/store'
import 'antd/dist/reset.css'

const container = document.getElementById('root')
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
    <Router>
        <Provider store={store}>
            <ConfigProvider
                theme={{
                    algorithm: theme.darkAlgorithm,
                    token: {
                        colorPrimary: '#3b82f6', // Energetic Blue
                        fontFamily: "'Inter', sans-serif",
                        colorBgBase: '#0b0f19', // Deep dark blueish background
                        colorBgContainer: '#1f2937', // Card backgrounds slightly lighter
                        borderRadius: 12,
                    },
                }}
            >
                <App tab="home" />
            </ConfigProvider>
        </Provider>
    </Router>
);