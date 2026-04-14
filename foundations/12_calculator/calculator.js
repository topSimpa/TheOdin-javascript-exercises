const add = function(augEnd, addEnd) {
  return (augEnd + addEnd);
	
};

const subtract = function(minuEnd, subtraEnd) {
  return (minuEnd - subtraEnd);
};

const sum = function(arr) {
  return arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0,
  );
	
};

const multiply = function(arr) {
  return arr.reduce(
    (product, currentValue) => product * currentValue,
    1,
  )
};

const power = function(base, exponent) {
	return (base ** exponent);
};

const factorial = function(argument) {
	let range = Array.from({ length: argument }, (_, i) => i + 1)
  return (multiply(range))
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
