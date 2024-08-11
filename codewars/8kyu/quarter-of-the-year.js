/*
 Given a month as an integer from 1 to 12,
 return to which quarter of the year it belongs as an integer number.

 For example: month 2 (February), is part of the first
 quarter; month 6 (June), is part of the second quarter;
 and month 11 (November), is part of the fourth quarter.

 Constraint:
 1 <= month <= 12
*/

{
  const quarterOf = (month) => {
    const quarter = {
      1: [1, 2, 3],
      2: [4, 5, 6],
      3: [7, 8, 9],
      4: [10, 11, 12],
    };

    return +Object.keys(quarter)
      .reduce((res, k) => res + (quarter[k].includes(month) ? k : ''), '');
  };

  console.log(quarterOf(3)); // 1
  console.log(quarterOf(8)); // 3
  console.log(quarterOf(11)); // 4
}

{
  const quarterOf = (month) => Math.ceil(month / 3);

  console.log(quarterOf(3)); // 1
  console.log(quarterOf(8)); // 3
  console.log(quarterOf(11)); // 4
}
