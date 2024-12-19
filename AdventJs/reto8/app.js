/**
 * @param {number[]} indices - The reno indices
 * @param {number} length - The length of the race
 * @returns {string} The reno race
 */
function drawRace(indices, length) {
    const lineas = indices.map((reno, i) => {
        let linea = ''
        linea += '~'.repeat(length)
        const posicion = reno < 0 ? length + reno : reno
        
        linea = reno !== 0 ? linea.slice(0, posicion) + 'r' + linea.slice(posicion + 1) : linea
        
        return `${linea.padStart(length + indices.length - 1 - i, ' ')} /${i + 1}`  
    })
    return lineas.join('\n')
}

