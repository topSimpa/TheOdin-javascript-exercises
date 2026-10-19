const contains = function (obj, find) {
  if (!obj) {
    //because you can match null and NaN
    //null has no constructor, NaN has no equivalent
    const match = obj === find;
    const isNaN = Number.isNaN(obj) && Number.isNaN(find);
    return match || isNaN;
  }
  if (!(obj.constructor === Object)) {
    return obj === find;
  }
  let isFound = false;
  for (const value of Object.values(obj)) {
    isFound = contains(value, find);
    if (isFound) return isFound;
  }
  return isFound;
};

// Do not edit below this line
module.exports = contains;
