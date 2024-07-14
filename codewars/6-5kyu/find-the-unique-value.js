/**
 * There is an array with some numbers. All numbers are equal except for one. Try to find it!
 * findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
 * findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
 * It’s guaranteed that array contains at least 3 numbers.
 */

{
  const findUniq = (array) => {
    let uniqValue;
    for (let i = 0; i < array.length; i++) {
      for (let k = i; k < array.length; k++) {
        if (array[i] !== array[k]) uniqValue = array[i];
      }
    }
    return uniqValue;
  };

  console.log(findUniq([1, 1, 1, 2, 1, 1]));
  console.log(findUniq([0, 0, 0.55, 0, 0]));
}
console.log('<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>');
{
  const findUniq = (array) => {
    let uniqValue,
        hash = {};

    for (let i = 0; i < array.length; i++) {
      if (array[i] in hash) {
        hash[array[i]] += 1;
      } else {
        hash[array[i]] = 1;
      }
    }

    for (const key in hash) {
      if (hash[key] === 1) uniqValue = +key;
    }
    return uniqValue;
  };

  console.log(findUniq([1, 1, 1, 2, 1, 1]));
  console.log(findUniq([0, 0, 0.55, 0, 0]));
}
console.log('<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>');
{
  const findUniq = (array) =>
    // or use .find()
    +array.filter((value) => array.indexOf(value) === array.lastIndexOf(value));
  console.log(findUniq([1, 1, 1, 2, 1, 1]));
  console.log(findUniq([0, 0, 0.55, 0, 0]));
}
console.log('<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>');
{
  const findUniq = (array) => {
    const sortedArr = array.sort((a, b) => a - b);
    return sortedArr[0] === sortedArr[1] ? sortedArr.pop() : sortedArr[0];
  };

  console.log(findUniq([1, 1, 1, 2, 1, 1]));
  console.log(findUniq([0, 0, 0.55, 0, 0]));
}
