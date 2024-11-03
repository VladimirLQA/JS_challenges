/*

*/

const testKeys = ['x', 'y'];
const testObjs = [
  { x: 1, y: 1 },
  { x: 2, y: 2 },
  { x: 1, z: 1 },
  { x: 1, y: 1, z: 3 },
];

{
  const duplicated = (arr: any[], keys: string[]) => {
    const map = new Map<string, number>();
    const ids = arr.map((obj) => keys.map((k) => obj[k] ?? 'u').join('-'));

    ids.forEach((id) => {
      map.set(id, (map.get(id) ?? 0) + 1);
    });

    return arr.filter((_, idx) => map.get(ids[idx])! > 1);
  };

  console.log(duplicated(testObjs, testKeys));
}
{
  const duplicated = (arr: any[], keys: string[]) =>
    arr.filter((object, i, self) =>
      self.filter((obj) => keys.every((k) => object[k] === obj[k])).length > 1);

  console.log(duplicated(testObjs, testKeys));
}
{
  const duplicated = (arr: any[], keys: string[]) => {
    const hash: Record<string, any[]> = arr.reduce((record, obj) => {
      const id = keys.reduce((str, k) => str + obj[k], '');
      if (!record[id]) {
        record[id] = [];
      }
      record[id].push(obj);
      return record;
    }, {});

    return Object.values(hash).filter((obj) => obj.length > 1).flat();
  };

  console.log(duplicated(testObjs, testKeys));
}
{

  const duplicated = (arr: any[], keys: string[]) => {
    const map = new Map<string, number>();

    for (const obj of arr) {
      const id = keys.reduce((str, k) => str + obj[k], '');
      map.set(id, (map.get(id) ?? 0) + 1);
    }

    return arr.filter((obj) => {
      const id = keys.reduce((str, k) => str + obj[k], '');
      return map.get(id)! > 1;
    });
  };

  console.log(duplicated(testObjs, testKeys));
}
{
  const duplicated = (arr: any[], keys: string[]) => {
    const map = new Map<string, number>();
    const objectsIDs = arr.map((obj) => {
      const id = keys.reduce((str, k) => str + obj[k], '');
      map.set(id, (map.get(id) ?? 0) + 1);
      return { ...obj, id };
    });

    return objectsIDs.filter(({ id }) => map.get(id)! > 1);
  };

  console.log(duplicated(testObjs, testKeys));
}
