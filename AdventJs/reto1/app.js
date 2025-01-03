/**
 * @param {number[]} gifts - The array of gifts to prepare
 * @returns {number[]} An array with the prepared gifts
 */

function prepareGifts(gifts) {
    return [...new Set(gifts)].toSorted((a,b) => a - b)
}
