const reverseString = function(str) {
    // to reverse a string you only have to swap characters at opposite ends
    let middleIndex = Math.floor(str.length / 2) //final swapping count or middle index
    let lastIndex = str.length - 1;

    console.log(str, middleIndex, lastIndex);

    let head = "";
    let tail = "";
    for (index = 0; index < middleIndex; index++) {
        let hChar = str[lastIndex]; 
        let tChar = str[index];
        head = head + hChar;
        tail = tChar + tail;

        lastIndex--; //move to the next index from the rear
    }

    //middle character always stay in position
    if ((str.length % 2) == 0) {
        return `${head}${tail}`;
    } else {
        return `${head}${str[middleIndex]}${tail}`
        
    }

};

// Do not edit below this line
module.exports = reverseString;
