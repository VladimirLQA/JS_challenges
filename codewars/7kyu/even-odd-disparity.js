/*
 Given an array, return the difference between the count of
 even numbers and the count of odd numbers. 0 will be considered an even number.

 For example:
  solve([0,1,2,3]) = 0 because there are two even
  numbers and two odd numbers. Even - Odd = 2 - 2 = 0.   
*/

{
  const solve = (a) => {
    const [even, odd] = a.filter((item) => !isNaN(item))
      .reduce((acc, n) => ( n % 2 ? acc[0]++ : acc[1]++ ,acc), [0, 0]);

      return even - odd;
  };

  console.log(solve([0,1,2,3])); // 0
  console.log(solve([0,1,2,3,'a','b'])); // 0
}
