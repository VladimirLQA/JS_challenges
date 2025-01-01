/*
  https://www.codewars.com/kata/55eea63119278d571d00006a
*/

{
  const nextId = (ids) => {
    let result;
    const sortedIDs = ids.sort((a, b) => a - b);
    for (let i = 0; i < sortedIDs.length; i++) {
      if (!sortedIDs.includes(i)) return i;
      result = i + 1;
    }
    return result;
  };

  console.log(nextId([0, 1, 2, 3, 5])); // 4
  console.log(nextId([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 11
}
{
  const nextId = (ids) => {
    const unique = new Set(ids);
    let i = 0;
    while (true) {
      if (!unique.has(i)) return i;
      i++;
    }
  };
  console.log(nextId([0, 1, 2, 3, 5])); // 4
  console.log(nextId([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 11
}
