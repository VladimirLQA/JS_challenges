/*
 We want to extend the array class so that
 it provides a contains_all? method.
 This method will always assume that an array is passed
 in and will return true if all values in the passed
 in array are present within the current array.
 For example:
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  items.containsAll([1, 2, 3]);  =>  true
  items.containsAll([1, 5, 13]);  =>  false // because 13 is not in the items array
*/

{
  Object.defineProperty(Array.prototype, 'containsAll', {
    value: function containsAll(a) {
      if (!a.length) return true;
      return this.filter((el) => a.includes(el)).length === a.length;
    } });

  console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    .containsAll([1, 2, 3, 4, 5])); // true

  console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    .containsAll([12, 15])); // false
}

{
  Object.defineProperty(Array.prototype, 'containsAll2', {
    value: function containsAll2(a) {
      const combined = new Set([...a, ...this]);
      return combined.size === this.length;
    } });

  console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    .containsAll2([1, 2, 3, 4, 5])); // true

  console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    .containsAll2([12, 15])); // false
}

{
  Object.defineProperty(Array.prototype, 'containsAll3', {
    value: function containsAll3(a) {
      return a.every((el) => this.includes(el));
    } });

  console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    .containsAll3([1, 2, 3, 4, 5])); // true

  console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    .containsAll3([12, 15])); // false
}
