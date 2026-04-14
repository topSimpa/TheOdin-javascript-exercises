const palindromes = function (str) {
    //Remove spaces and punctuations
    const strArray = str.split(/[^\w]+/);
    console.log(strArray)

    const filteredString = strArray.join("");
    console.log(filteredString)

    
    let length = filteredString.length;
    console.log(length);

    //loop through the string halfway
    const middle = Math.floor(length / 2);

    for (let index = 0; index < middle; index++) {
        const frontChar = filteredString[index].toLowerCase();
        const rearChar = filteredString[--length].toLowerCase();

        //check if each letter on both halves are same
        if (frontChar != rearChar) {
            return false
        }

    }
    return true;
    
};

// Do not edit below this line
module.exports = palindromes;
