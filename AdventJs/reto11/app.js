/**
 * @param {string} filename - The filename to decode.
 * @returns {string} The decoded filename.
 */
function decodeFilename(filename) {
    const regex = /^[0-9]+_([\w-]+\.[a-zA-Z]+)(\.[\w]+)?$/
    const match = filename.match(regex) 
    return match ? match[1] : ''
}

  console.log(decodeFilename('23402394_magic_wind-blueprint.jpg'))