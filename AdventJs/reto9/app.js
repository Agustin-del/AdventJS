/**
 * @param {string[]} board - Represent the train situation
 * @param {'U' | 'D' | 'R' | 'L' } mov - Movement direction
 * @returns {'none' | 'crash' | 'eat'}
 */
function moveTrain(board, mov) {    
    let filaLocomotora
    let columnaLocomotora
    
    board.some((row, i) => {
        const col = row.indexOf('@')
        if (col !== -1) {
            filaLocomotora = i
            columnaLocomotora = col
            return true
        }
    })

    const moves = {
        U: [-1, 0],
        D: [1, 0],
        R: [0, 1],
        L: [0, -1]
    }

    const [moveI, moveJ] = moves[mov]
    filaLocomotora += moveI
    columnaLocomotora += moveJ

    if(filaLocomotora < 0 || filaLocomotora >= board.length || columnaLocomotora < 0 || columnaLocomotora >= board[0].length) {
        return 'crash'
    }

    const nuevaPosicion = board[filaLocomotora][columnaLocomotora]

    if(nuevaPosicion === '*') return 'eat'
    if(nuevaPosicion === 'o') return 'crash'
    return 'none'    
}



const board = [
    '·····',
    '*····',
    '@····',
    'o····',
    'o····'
]

console.log(moveTrain(board, 'D'))