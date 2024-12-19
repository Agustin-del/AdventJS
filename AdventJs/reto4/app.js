/**
 * @param {number} height - Height of the tree
 * @param {string} ornament - Symbol to draw
 * @returns {string} Drawn tree
 */
function createXmasTree(height, ornament) {
    const baseWidth = height * 2 - 1
    let tree = ''
    for (let i = 0; i < height; i++) {
        const ornaments = ornament.repeat(2 * i + 1)
        tree += ornaments.padStart(height + i, '_').padEnd(baseWidth, '_') + '\n'             
    }

    const trunk = '#'.padStart(height, '_').padEnd(baseWidth, '_')
    return tree + trunk + '\n' + trunk
}
