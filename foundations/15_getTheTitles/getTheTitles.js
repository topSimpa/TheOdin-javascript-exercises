const getTheTitles = function(books) {
    let initial = [];

    return books.reduce(
        (titles, book) => {
             titles.push(book.title);
             return titles;
        },
        initial,
    );
};

// Do not edit below this line
module.exports = getTheTitles;
