const permutations = function (set) {
  const length = set.length;

  if (length < 1) {
    return [[...set]];
  }

  const arrangements = [];
  const lastNumber = set[length - 1];
  const previous = permutations(set.slice(0, -1));
  //permutation of a set that doesn't include lastNumber

  previous.forEach((item) => {
    for (let start = 0; start < length; start++) {
      const newItem = item.toSpliced(start, 0, lastNumber);
      arrangements.push(newItem);
    }
  });

  return arrangements;
};

// Do not edit below this line
module.exports = permutations;
