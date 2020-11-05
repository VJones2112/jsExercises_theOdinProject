const caesar = function(string, num) {
    return string
    .split("")
    .map(char => shiftChar(char, num))
    .join("");
};

const codeSet = code => (code < 97 ? 65 : 97);

const mod = (n, m) => (n % m + m) % m;

const shiftChar = (char, num) => {
  const code = char.charCodeAt();

  if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
    return String.fromCharCode(
      mod(code + num - codeSet(code), 26) + codeSet(code)
    );
  }
  return char;
};
    
    // Nope his didn't work either :(
        /*
    num = num % 26;
    let lowerCaseStr = string.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let newStr = '';

    for (let i = 0; i < lowerCaseStr.length; i++) {
        let currentLetter = lowerCaseStr[i];
        if (currentLetter === ' ') {
            newStr += currentLetter;
            continue;
        }
        let currentIndex = alphabet.indexOf(currentLetter);
        let newIndex = currentIndex + num;
        if (num < 0) newIndex = currentIndex - num;
        if (newIndex > 25) newIndex = newIndex - 26;
        if (newIndex < 0) newIndex = newIndex + 26;
        if (string[i] === string[i].toUpperCase()) {
            newStr += alphabet[newIndex].toUpperCase();
        }
        else newStr += alphabet[newIndex];
    }
    return newStr;
    */ // end this rand guy's code








    // caesar('A', 1)).toEqual('B');
  // Need to iterate over only letters
  // Need to 'mutate' the letters into the new letters 
  // Could I find the index of character that matches and then shift?
  // Ascii code
    //let letters = /\w/g;
    //let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    // string.split('')

/* Try the other guys
    num = num % 26; // didn't do anything
    let cipheredStr = '';
    for (let i = 0; i < string.length; i++) {
        let asciiNum = string[i].charCodeAt();

        // For grammatical characters
        if (asciiNum < 65) {
            cipheredStr += String.fromCharCode(asciiNum);
        }

        // For capital letters or lowercase letters
        if ((asciiNum >= 65 && asciiNum <= 90) || (asciiNum >= 97 && asciiNum <= 122)) {
            let cipheredAscii = asciiNum + num
            // For negative shifts
            // if (num < 0) { cipheredAscii = asciiNum - num  } // NOT WORKING!
            if (cipheredAscii > 90 && cipheredAscii < 97 || cipheredAscii > 122) {
                cipheredAscii -= 26;
            }
            cipheredStr += String.fromCharCode(cipheredAscii)
            
            //expect [ to equal A. 91 is not 65
            // if (asciiNum > 90 && asciiNum < 97 || asciiNum > 122) {
            //     let adjustedAscii = asciiNum - 26;
            //     cipheredStr += String.fromCharCode(adjustedAscii)
            // }
        } 
        
        
    }
    return cipheredStr;
    */


module.exports = caesar
