const convertToCelsius = function(f) {
  if(f == 32) {
    return 0;
  }
  return parseFloat((5/9*(f - 32)).toFixed(1));
};

const convertToFahrenheit = function(c) {
  if(c == 0) {
    return 32;
  }
  return parseFloat(((c * 9/5 + 32)).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
