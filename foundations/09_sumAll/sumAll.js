const sumAll = function(start, end) {
    let sum = 0;

    if ((start < 0) || (end < 0)) {
        return "ERROR"; 
    }
       

    if ((typeof start  != "number") || typeof end  != "number") {
         return "ERROR";
    }

    if (!(Number.isInteger(start) && Number.isInteger(start))) {
         return "ERROR";
    }   

    if (start > end) {
         let buffer = start
         start = end;
         end = buffer;
    }
       

    // console.log(`start ${start}`);
    // console.log(`end ${end}`);

    for (let number = start; number <= end; number++) {
        sum += number;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
