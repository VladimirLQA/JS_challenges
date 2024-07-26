/*
 You are given a table, in which every key is a stringified number,
 and each corresponding value is an array of characters, e.g.

 {
   "1": ["A", "B", "C"],
   "2": ["A", "B", "D", "A"],
 }
 Create a function that returns a table with the same keys,
 but each character should appear only once among the value-arrays, e.g.

 {
   "1": ["C"],
   "2": ["A", "B", "D"],
 }

 Rules
 Whenever two keys share the same character, they should
 be compared numerically, and the larger key will keep that character.
 That's why in the example above the array under
 the key "2" contains "A" and "B", as 2 > 1.
 If duplicate characters are found in the same array,
 the first occurance should be kept.
*/

const inputTest1 = {
  '1': ['C', 'F', 'G'],
  '2': ['A', 'B', 'C'],
  '3': ['A', 'B', 'D'],
};

{
  const removeDuplicates = (obj) => {
    const res = {};
    const ks = Object.keys(obj).sort((a, b) => b - a);
    const seen = new Set();

    for (const k of ks) {
      res[k] = [];

      for (const char of obj[k]) {
        if (!seen.has(char)) {
          res[k].push(char);
          seen.add(char);
        }
      }
    }
    return res;
  };

  console.log(removeDuplicates(inputTest1));

}

{
  const removeDuplicates = (obj) => {
    const charMap = new Map();

    for (const key in obj) {
      const chars = obj[key];
      for (const char of chars) {
        if (!charMap.has(char) || +key > +charMap.get(char)) {
          charMap.set(char, key);
        }
      }
    }

    const result = {};

    for (const key in obj) {
      result[key] = [];
      const seen = new Set();

      for (const char of obj[key]) {
        if (!seen.has(char) && charMap.get(char) === key) {
          result[key].push(char);
          seen.add(char);
        }
      }
    }
    return result;
  };

  console.log(removeDuplicates(inputTest1));
}

{

  const removeDuplicates = (obj) =>
    Object.entries(obj)
      .sort(([a], [b]) => +a - +b)
      .reduceRight((acc, [key, value]) => ({
        ...acc,
        [key]: [...new Set(value.filter((char) =>
          !Object.values(acc)
            .reduce((acc, val) => [...acc, ...val], [])
            .includes(char)))],

      }), {});

  console.log(removeDuplicates(inputTest1));
}

{
  const removeDuplicates = (obj) =>
    ((met) =>
      Object.entries(obj)
        .reduceRight((acc, [key, arr]) =>
          ({
            ...acc,
            [key]: arr.filter((ch) => !met.has(ch) && met.add(ch)),
          }), {})
    )(new Set());

  console.log(removeDuplicates(inputTest1));
}

{
  const removeDuplicates = (obj) => {
    let unique = [];
    for (const key of Object.keys(obj).reverse()) {
      obj[key] = [...new Set(obj[key])]
        .filter((char) => unique.indexOf(char) < 0);
      unique = [...unique, ...obj[key]];
    }
    return obj;
  };

  console.log(removeDuplicates(inputTest1));
}
