const sumAll = function(start, stop) {
    if (start < 0 || stop < 0) {
        return "ERROR";
    } else if (typeof start !== 'number' || typeof stop !== 'number') {
            return "ERROR";
        } 
     else if (start > stop) {
        const min = start;
        start = stop;
        stop = min;
    }  let total = 0;
        for (let i = start; i < stop + 1; i++){
            total += i;
        }    
        return total; 
}


module.exports = sumAll
