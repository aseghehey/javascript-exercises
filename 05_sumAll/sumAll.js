const sumAll = function(x, y) {
    
    if (!Number.isInteger(x) || !Number.isInteger(y) || x < 0 || y < 0) return "ERROR";
    if (x > y){
        let tmp = x;
        x = y;
        y = tmp;
    }

    let sum = 0;
    for (let i = x; i < y + 1; i++){
        sum += i;
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
