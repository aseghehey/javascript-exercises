const add = function(x,y) {
	return x + y;
};

const subtract = function(x,y) {
	return x - y;
};

const sum = function(arr) {
	let res = 0;
  arr.forEach((item) => {
    res += item;
  });
  return res;
};

const multiply = function(arr) {
  let res = 1;
  arr.forEach((val) => {
    res *= val;
  });
  return res;
};

const power = function(x,y) {
	return x**y;
};

const factorial = function(x) {
  let res = 1;
	for (let i = 1; i < x + 1; i++ ){
    res *= i;
  }
  return res;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
