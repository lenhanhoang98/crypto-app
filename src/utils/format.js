import millify from 'millify';

/**
 * Formats a crypto price to show 3 significant figures for sub-1 dollar coins,
 * or millify for larger coins.
 * Example: 0.002 -> 0.00200 (if exactly 0.002) or 0.00246
 * StarkNet: 0.0346
 */
export const formatPrice = (price) => {
    if (price === undefined || price === null || price === '') return 'N/A';
    const num = Number(price);
    if (isNaN(num)) return price;

    if (num < 1) {
        // toPrecision(3) gives "3 digits starting from the highest [significant] number"
        // 0.002 -> "0.00200" (if exactly 0.002)
        // 0.034567 -> "0.0346"
        return num.toPrecision(3);
    }

    // For numbers >= 1, millify often provides 3 characters by default (e.g. 1.23)
    return millify(num);
};

export default formatPrice;
