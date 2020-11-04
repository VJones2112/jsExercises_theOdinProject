const caesar = function(string, num) {
    //CAN'T CHANGE KEYCODE, they're read only  
    // caesar('A', 1)).toEqual('B');
  // Need to iterate over only letters
  // Need to 'mutate' the letters into the new letters 
  // Could I find the index of character that matches and then shift?
  // Ascii code
    //let letters = /\w/g;
    //let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    // string.split('')
    let cipheredStr = '';
    for (let i = 0; i < string.length; i++) {
        let asciiNum = string[i].charCodeAt();
        if (asciiNum > 90 || asciiNum > 122) {
            // asciiNum - 26;
            cipheredStr += String.fromCharCode(asciiNum - 26 + num)
        }
        if ((asciiNum >= 65 && asciiNum <= 90) || (asciiNum >= 97 && asciiNum <= 122)) {
            cipheredStr += String.fromCharCode(asciiNum + num)
        } //else if (asciiNum > 77 && asciiNum <= 90) {
           // cipheredStr += String.fromCharCode(asciiNum - 13)
        //} 
        
    }
    return cipheredStr;
}

module.exports = caesar
