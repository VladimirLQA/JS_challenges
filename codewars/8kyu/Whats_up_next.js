/*
 * Given a sequence of items and a specific item in that sequence,
 * return the item immediately following the item specified.
 * If the item occurs more than once in a sequence,
 * return the item after the first occurence. This should work
 * for a sequence of any type.*/

{
  function nextItem(xs, item) {
    const array = xs[Symbol.iterator]();
    for (const i of array) {
      if (i === item) {
        return array.next().value;
      }
    }
  }

  function* countFrom(n) {
    for (let i = n; ; ++i) yield i;
  }

  console.log(nextItem([1, 2, 3, 4, 5, 6, 7, 8], 5)); // 6
  console.log(nextItem(['a', 'b', 'c'], 'd')); // undefined
  console.log(nextItem(['a', 'b', 'c'], 'c')); // undefined
  console.log(nextItem('testing', 't')); // "e"
  console.log(nextItem(countFrom(1), 12)); // 13
}

console.log(`==========================================`);

{
  const nextItem = (xs, item) => {
    let found = false;
    let finalValue;

    for (const i of xs) {
      if (found) {
        finalValue = i;
        break;
      }
      if (i === item) found = true;
    }
    return finalValue;
  };

  function* countFrom(n) {
    for (let i = n; ; ++i) yield i;
  }
  console.log(nextItem([1, 2, 3, 4, 5, 6, 7, 8], 5)); // 6
  console.log(nextItem(['a', 'b', 'c'], 'd')); // undefined
  console.log(nextItem(['a', 'b', 'c'], 'c')); // undefined
  console.log(nextItem('testing', 't')); // "e"
  console.log(nextItem(countFrom(1), 12)); // 13
}
