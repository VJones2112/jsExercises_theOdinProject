let findTheOldest = function(arr) {
    let thisYear = new Date().getFullYear();
    let agesArr = [];
    for (let i = 0; i < arr.length; i++) {
        let ages = thisYear - arr[i].yearOfBirth;
        agesArr.push(ages);
        agesArr.sort();
    }
    return agesArr[0];
}

module.exports = findTheOldest
