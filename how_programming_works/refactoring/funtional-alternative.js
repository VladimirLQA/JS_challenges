const fs = require('node:fs');
const path = require('path');

const filePath = path.resolve(__dirname, 'cities.csv');

const proportion = (max, val) => Math.round((val * 100) / max);
const compose =
  (...funcs) =>
    (x) =>
      funcs.reduce((x, f) => f(x), x);

const densityCol = 3;
const cellWidth = [18, 10, 8, 8, 18, 6];

const getDataSet = (file) =>
  fs
    .readFileSync(file, 'utf8')
    .split('\n')
    .filter((str, i) => i && str)
    .map((line) => line.split(','));

const calculateProportion = (table) => (
  table.sort((row1, row2) => row2[densityCol] - row1[densityCol]),
  table.map(
    (row) => (row.push(proportion(table[0][densityCol], row[densityCol])), row),
  )
);

const renderTable = (table) =>
  table
    .map((row) =>
      row
        .map((cell, i) =>
          cell.toString()[i ? 'padStart' : 'padEnd'](cellWidth[i]),
        )
        .join(''),
    )
    .join('\n');

const main = compose(getDataSet, calculateProportion, renderTable);

console.log(main(filePath));
