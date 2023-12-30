const sumAll = function(start, end) {
    if(start < 0 || end < 0) {
        return "ERROR";
    }

    if(typeof start != "number" || typeof end != "number") {
        return "ERROR";
    }

    if(start > end) {
        end = end + start;
        start = end - start;
        end = end - start;
    }

    let sum = 0;
    for(let i = start; i <= end; i++) {
        sum += i;
    }
    
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
