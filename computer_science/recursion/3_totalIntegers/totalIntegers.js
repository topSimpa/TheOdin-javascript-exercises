const totalIntegers = function (container) {
  if (Number.isNaN(container) || !container) return;

  const isArray = Array.isArray(container);
  const isObject = container.constructor === Object;

  if (!(isArray || isObject)) {
    return;
  }

  let count = 0;
  for (const item of Object.values(container)) {
    const acount = totalIntegers(item);
    if (acount) {
      count += acount;
    } else {
      count += Number(Number.isInteger(item));
    }
  }
  return count;
};

// Do not edit below this line
module.exports = totalIntegers;
