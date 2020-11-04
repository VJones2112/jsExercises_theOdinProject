const palindromes = function(string) {
    newString = string.toLowerCase().replace(/\W/g, '');
    return (newString.split('').reverse().join('') == newString);
}

module.exports = palindromes
