const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((obj, current) => current+obj, 0);
};

const multiply = function(...nums) {
  return nums.reduce((obj, current) => current*obj, 1);
};

const power = function(a, b) {
	return a ** b
};

const factorial = function(number) {
	if (number === 0) return 1
  let factorialNum = 1
  for (let i = 2; i <= number; i++) {
    factorialNum *= i;
  } 
  return factorialNum;
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
