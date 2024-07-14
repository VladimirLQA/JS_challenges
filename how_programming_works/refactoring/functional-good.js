const fs = require('node:fs');
const path = require('path');

const filePath = path.resolve(__dirname, 'cities.csv');

const compose =
  (...funcs) =>
    (x) =>
      funcs.reduce((x, fn) => fn(x), x);
const proportion = (max, val) => Math.round((val * 100) / max);

const cellPad = (i, str, width) =>
  i ? str.padStart(width) : str.padEnd(width);
const cellWIdth = (i) => [18, 10, 8, 8, 18, 6][i];

const renderCell = (cell, i) => cellPad(i, cell + '', cellWIdth(i));
const renderRow = (row) => row.map(renderCell).join('');
const renderTable = (table) => table.map(renderRow).join('\n');

const densityColumn = () => 3;
const sortByDensity = (table) =>
  table.sort((row1, row2) => row2[densityColumn()] - row1[densityColumn()]);

const calcColumn = (table, max) =>
  table.map((row) => (row.push(proportion(max, row[densityColumn()])), row));

const calcProportion = (table) => calcColumn(table, table[0][densityColumn()]);

const parseTable = (lines) => lines.map((line) => line.split(','));
const toLines = (data) => data.split('\n').filter((s, i) => i && s);
const readFile = (file) => fs.readFileSync(file, 'utf-8');
const getDataset = compose(readFile, toLines, parseTable);

const main = compose(getDataset, sortByDensity, calcProportion, renderTable);

console.log(main(filePath));
