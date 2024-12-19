/**
 * @param {{ type: 'I' | 'R', size: number }[]} shoes
 * @returns {number[]} Available shoes 
 */

function organizeShoes(shoes) {
    const pairs = []
    const sizes = shoes.reduce((a, {type, size}) => {
        ((a[size] ??= {I:0, R:0})[type]++)
        return a
    }, {})

    for (const [size, count] of Object.entries(sizes)) {
        const {I, R} = count
        const available = Math.min(I, R) 
        for (let i = 0; i < available; i++) {
            pairs.push(size)
        }
    }
    return pairs
}