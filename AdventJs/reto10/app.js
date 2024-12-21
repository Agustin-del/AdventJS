/**
 * @param {string[]} instructions - The instructions to execute
 * @returns {number} The value of the register A
 */
function compile(instructions) {
  const registros = {}
  let pointer = 0
  while(pointer < instructions.length){
    const [instructionName, ...regVals] = instructions[pointer].split(' ')
    switch(instructionName) {
      case('MOV'):
        isNaN(regVals[0]) ? registros[regVals[1]] = registros[regVals[0]] ?? 0 : registros[regVals[1]] = parseInt(regVals[0])
        break
      case('INC'):
        registros[regVals[0]] = (registros[regVals[0]] ?? 0) + 1      
        break
      case('DEC'):
        registros[regVals[0]] = (registros[regVals[0]] ?? 0) - 1
        break
      case('JMP'):
        if((registros[regVals[0]] ?? 0) === 0) {
          pointer = parseInt(regVals[1])
          continue
      }
      break
    }  
    pointer++
  }
  return registros['A']
}

