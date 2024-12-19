/**
 * @param {string[]} names - Array of names to frame
 * @returns {string} The framed names
 */

function createFrame(names) {
    const maxLengthName = Math.max(...names.map(n => n.length))
    const caracteresBorde = '*'.repeat(maxLengthName + 4)
    let frame = ''
    names.forEach(n => {
        frame += `* ${n.padEnd(maxLengthName)} *\n`
    })
    return caracteresBorde + '\n' + frame + caracteresBorde
}
