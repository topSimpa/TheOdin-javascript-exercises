const convertToCelsius = function(temp) {
  let degreeCelcius = (temp - 32) * 5 / 9;

  return (Math.round(degreeCelcius * 10) / 10) // to approximate to one decimal place
  
};

const convertToFahrenheit = function(temp) {
  let degreeF =  (9 * temp) / 5 + 32;

  return (Math.round(degreeF * 10) / 10)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
