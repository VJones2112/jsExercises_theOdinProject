const reverseString = function(string) {
    let splitString = string.split('')
    let reverseString = splitString.reverse().join('')
    return reverseString;

    // Solution combined that into one line of code
    // return string.split('').reverse().join('')
}
module.exports = reverseString
