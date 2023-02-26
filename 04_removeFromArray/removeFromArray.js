/*
const removeFromArray = function(arr, idx) {

    for (let i = 0; i < arguments.length; i++) {
        if (arr.includes(arguments[i]) === false) {
            continue;
        }
        let index = arr.indexOf(arguments[i]);
        arr.splice(index, 1);
    }

    return arr;
};
*/
/*
const removeFromArray = function (arr, ...args) {
    return arr.filter(val => !args.includes(val));
};
*/

const removeFromArray = function (arr, ...args) {
    const res = [];
    arr.forEach((item) => {
        if (!args.includes(item)){
            res.push(item);
        }
    });
    return res;
};

// Do not edit below this line
module.exports = removeFromArray;
