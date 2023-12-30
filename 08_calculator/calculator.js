const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(list) {
	let sum = 0;
  for(const item of list) {
    sum += item;
  }
  return sum;
};

const multiply = function(list) {
  let product = 1;
  for(const item of list) {
    product *= item;
  }
  return product;
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(number) {
	if(number === 0 || number === 1) {
    return 1;
  }
  let fact = 1;
  for(let i = number; i > 1; i--) {
    fact *= i;
  }
  return fact;
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
