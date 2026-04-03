const repeatString = function(str, num) {
    let repeatedString = "";

    if (num < 0) {
        return "ERROR";
    }
    
    for (let repetition = 0; repetition < num; repetition++) {
        repeatedString = repeatedString + str;
    }
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
