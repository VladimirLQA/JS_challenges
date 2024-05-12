const testString = 'Say "Hello" to <JavaScript> world';

const getStringBetween = (str, start, end) => {
  let idx = str.indexOf(start);
  if (idx === -1) return '';
  let line = str.substring(idx + 1);
  if (end) {
    idx = line.indexOf(end);
    line = line.substring(0, idx);
  }
  return line;
};

console.log(getStringBetween(testString, '<', '>'));
console.log(getStringBetween(testString));
console.log(getStringBetween(testString, '>', '<'));

