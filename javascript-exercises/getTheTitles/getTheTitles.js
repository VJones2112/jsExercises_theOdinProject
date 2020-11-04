const getTheTitles = function(arr) {
    //your job is to write a function that takes the array and returns an array of titles:
    const bookTitles = [];
    for (let i in arr) {
        bookTitles.push(arr[i].title);
    }
    return bookTitles;
}

// Solution was simpler: return arr.map(book => book.title)

module.exports = getTheTitles;
