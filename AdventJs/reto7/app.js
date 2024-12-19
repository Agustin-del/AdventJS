/** @param {string} packages with parentheses
 *  @returns {string} Fixed and sorted packages
 */
function fixPackages(packages) {
    // Code here
    const stack = []
    let current = ''
    for (const char of packages) {
        if (char === '(') {
            stack.push(current)
            current = ''
        } else if(char === ')') {
            current = stack.pop() + current.split('').reverse().join('')
        } else {
            current += char
        }
    }

    return current
}

console.log(fixPackages('a(b(c))e'))