const t1 = [[1], 2, [[3, 4]]];

{
  const flattenArray = (arr) => {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
      const currentItem = arr[i];
      if (Array.isArray(currentItem)) {
        result.push(...flattenArray(currentItem));
      } else {
        result.push(currentItem);
      }
    }
    return result;
  };

  console.log(flattenArray(t1));
}

console.log(`<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>`);

{
  const flattenArray = (arr) =>
    arr.reduce((result, currentItem) => {
      if (Array.isArray(currentItem)) {
        return result.concat(flattenArray(currentItem));
      } else {
        return result.concat(currentItem);
      }
    }, []);

  console.log(flattenArray(t1));
}
