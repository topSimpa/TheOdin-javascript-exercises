const removeFromArray = function(array, ...args) {
    for (let val of args) {
        for (let index = 0; index < array.length; index++) {
            if (val === array[index]) {
                array.splice(index, 1)
                index--; //to ensure no element is skipped
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
