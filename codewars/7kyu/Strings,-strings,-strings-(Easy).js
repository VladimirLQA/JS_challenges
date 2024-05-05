/*
* The toString() method has been disabled for booleans, numbers,
* arrays and objects. Your goal is to retrieve toString()
* for the following data types.
*/
[Boolean, Number, Array].forEach(obj => obj.prototype.toString = function() {
  return JSON.stringify(this);
});


console.log((1).toString());
console.log((-9).toString());
console.log([].toString());
console.log([1, 2, 3, 4, 5].toString());
console.log(Math.PI.toString());
console.log(true.toString());
console.log(false.toString());
console.log([Math.PI, Math.E].toString());


String.prototype.toString = function() {
  return String(this);
};

console.log((1).toString());
console.log((-9).toString());
console.log([].toString());
console.log([1, 2, 3, 4, 5].toString());
console.log(Math.PI.toString());
console.log(true.toString());
console.log(false.toString());
console.log([Math.PI, Math.E].toString());


