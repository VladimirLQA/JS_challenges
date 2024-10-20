/*
https://www.codewars.com/kata/58cc0705bd22e324b3000028/train/typescript
*/
const objs = [
  { x: 1, y: 1 },
  { x: 2, y: 2 },
  { x: 1, z: 1 },
  { x: 1, y: 1, z: 3 },
];
const keys = [ 'x', 'y' ];

{
  const unique = (arr: any[], keys: string[]) => {
    const seen = new Set<string>();
    return arr.filter((obj) => {
      const id = keys.map((k) => obj[k] ?? 'undefined').join('-');
      if (seen.has(id)) {
        return false;
      }
      seen.add(id);
      return true;
    });
  };

  console.log(unique(objs, keys));
}
{
  const unique = (arr: any[], keys: string[]) =>
    arr.reduce((acc, obj) => {
      const id = keys.reduce((str, key) => str + obj[key], '');
      if (!acc.used[id]) {
        acc.uniques.push(obj);
      }
      acc.used[id] = true;
      return acc;
    }, { uniques: [], used: {} }).uniques;

  console.log(unique(objs, keys));
}
{
  const unique = (arr: any[], keys: string[]) =>
    arr.reduce((acc, obj) => {
      const exist = acc.find((uniq: any) =>
        keys.every((k) => obj[k] === uniq[k]));
      if (!exist) {
        acc.push(obj);
      }
      return acc;
    }, [] as any[]);

  console.log(unique(objs, keys));
}
