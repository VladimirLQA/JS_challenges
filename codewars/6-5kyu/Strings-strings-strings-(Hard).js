const stringifyArray = (arr) => {
  return '[' + arr.map(item =>
    (typeof item === 'string' ? `'${item}'` : item)).join(',') + ']';

};

Array.prototype.toString = function() {
  if (Array.isArray(this)) return stringifyArray(this);
  return String(this);
};

console.log([1, 2, [3, 4], [5, 6], [[7]], [8, [9]]].toString());
console.log([true, false].toString());
console.log(['Hello World', 3.14, 'Lorem Ipsum'].toString());
console.log([1, 2.72, 4, 3.14, 9].toString());

String.prototype.toString = function() {
  return `${this}`;
};

console.log([1, 2, [3, 4], [5, 6], [[7]], [8, [9]]].toString());
console.log([true, false].toString());
console.log(['Hello World', 3.14, 'Lorem Ipsum'].toString());
console.log([1, 2.72, 4, 3.14, 9].toString());
