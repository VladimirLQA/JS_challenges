const map = (data, predicate) =>
  data.reduce((acc, currentValue, idx, originalArray) => {
    acc.push(predicate(currentValue, idx, originalArray));
    return acc;
  }, []);

console.log(map([1, 2, 3], (x) => x * 2));

const filter = (data, predicate) =>
  data.reduce((acc, currentValue, idx, originalArray) => {
    const isTrue = predicate(currentValue, idx, originalArray);
    if (isTrue) acc.push(currentValue);
    return acc;
  }, []);

console.log(filter([1, 2, 3, 4], (x) => x > 2));
