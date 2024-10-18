/*
 Given two arrays of integers m and n, test if they contain at
 least one identical element. Return true if they do; false if not.

 Your code must handle any value within the range of a
 32-bit integer, and must be capable of handling either
 array being empty (which is a false result,
 as there are no duplicated elements).
*/
{
  const duplicateElements = (m, n) => m.some((v) => n.includes(v));

  console.log(duplicateElements([1, 2, 3, 4, 5], [1, 6, 7, 8, 9]));
  console.log(duplicateElements([9, 8, 7], [8, 1, 3]));
}

{
  const duplicateElements = (m, n) => {
    if (m.length < n.length) {
      [m, n] = [n, m];
    }

    for (const number of n) {
      if (m.includes(number)) return true;
    }
    return false;
  };

  console.log(duplicateElements([1, 2, 3, 4, 5], [1, 6, 7, 8, 9]));
  console.log(duplicateElements([9, 8, 7], [8, 1, 3]));
}
