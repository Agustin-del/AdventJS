/** @param {string[]} box
 *  @returns {boolean} True if the gift is inside the box
 */
function inBox(box) {
    return box.slice(1, -1).some(line => line.slice(1, -1).includes('*'))
}

console.log(inBox([
    "###",
    "#*#",
    "###"
  ]))