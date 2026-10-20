const pascal = function (row) {
  if (row === 1) return [1];

  const columns = [];
  let [prev, end] = [0, 0];
  const prevRow = pascal(row - 1);

  for (const col in prevRow) {
    columns.push(prev + prevRow[col]);
    prev = prevRow[col];

    if (col == prevRow.length - 1) {
      columns.push(end + prevRow[col]);
    }
  }
  return columns;
};

// Do not edit below this line
module.exports = pascal;
