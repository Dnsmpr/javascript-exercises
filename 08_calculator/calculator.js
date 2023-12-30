const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(list) {
  return list.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
};

const multiply = function(list) {

  return list.reduce((accumulator, currentValue) => {
    return accumulator * currentValue;
  }, 1);
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
