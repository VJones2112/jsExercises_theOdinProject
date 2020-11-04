const fibonacci = function(num) {
    // The sequence is the sum of two previous numbers equal the 3rd:
    // 1, 1, 2, 3, 5, 8, 13, 21, 34, 55...
    let value;

    // Don't accept negative numbers
    if (num < 0) {
        return 'OOPS';
    }

    if (num == 1){
        value = 1;
    }

    if (num >= 2) {
        value = Math.floor((((1 + Math.sqrt(5))** num) - ((1 - Math.sqrt(5))** num)) / ((2 ** num) * Math.sqrt(5)));
    }

    return value;

}

module.exports = fibonacci
