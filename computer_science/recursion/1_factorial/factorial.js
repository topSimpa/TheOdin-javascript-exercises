const factorial = function (number) {
  const isType = Number.isInteger(number);
  const isPositive = number >= 0;

  if (!(isType && isPositive)) return;
  if (number == 0) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
};

// Do not edit below this line
module.exports = factorial;
