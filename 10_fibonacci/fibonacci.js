const fibonacci_helper = function(num) {
    if (num == 1) {
        return 1;
    }
    if (num == 0){
        return 0;
    }
    return fibonacci(num - 1) + fibonacci(num - 2);
};

const fibonacci = function(num) {
    if (num < 0) return "OOPS";
    return fibonacci_helper(num);
}

// Do not edit below this line
module.exports = fibonacci;
