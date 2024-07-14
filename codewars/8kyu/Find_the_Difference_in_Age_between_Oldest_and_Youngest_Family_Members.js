/*
 * You will be given an array of all the family members' ages, in any order.
 * The ages will be given in whole numbers, so a baby of 5 months,
 * will have an ascribed ‘age’ of 0.
 * Return a new array (a tuple in Python) with [youngest age, oldest age,
 * difference between the youngest and oldest age].*/

{
  function differenceInAges(ages) {
    const sorted = ages.map((el) => Math.floor(el)).sort((a, b) => a - b);
    const minAge = sorted.shift(); // sorted[0]
    const maxAge = sorted.pop(); // sorted[sorted.length - 1]
    const differenceAge = maxAge - minAge;
    return [minAge, maxAge, differenceAge];
  }

  console.log(differenceInAges([82, 15, 6, 38, 35])); // [6, 82, 76]
  console.log(differenceInAges([57, 99, 14, 32])); // [14, 99, 85]
}

console.log(`=================================================`);

{
  function differenceInAges(ages) {
    const max = Math.max(...ages),
          min = Math.min(...ages),
          diff = max - min;

    return [min, max, diff];
  }

  console.log(differenceInAges([82, 15, 6, 38, 35])); // [6, 82, 76]
  console.log(differenceInAges([57, 99, 14, 32])); // [14, 99, 85]
}

console.log(`=================================================`);

{
  const differenceInAges = (ages) => {
    const youngest = Math.min.apply(null, ages);
    const oldest = Math.max.apply(null, ages);
    return [youngest, oldest, oldest - youngest];
  };
  console.log(differenceInAges([82, 15, 6, 38, 35])); // [6, 82, 76]
  console.log(differenceInAges([57, 99, 14, 32])); // [14, 99, 85]
}
