const repeatString = function(str, num) {
    let string = '';
    if (num < 0) {
        return 'ERROR';
    } else {
    for (i = 0; i < num; i++) {
        'hey'.repeat();
        string += str;
    }  
    }
    return string;
 }

module.exports = repeatString
