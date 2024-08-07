/*

*/

{
  const rowWeights = (array) => {
    if (!array.length) return [0, 0];
    return array.reduce(
      (acc, w, idx) => {
        if (!(idx % 2)) acc[0] += w;
        else acc[1] += w;
        return acc;
      },
      [0, 0],
    );
  };

  console.log(rowWeights([80])); // [80, 0]
  console.log(rowWeights([100, 50])); // [100, 50]
  console.log(rowWeights([70, 58, 75, 34, 91])); // [236, 92]
  console.log(rowWeights([0])); // [0, 0]
}
{
  const rowWeights = (arr) =>
    arr.reduce((a, b, i) => ((a[i % 2] += b), a), [0, 0]);

  console.log(rowWeights([80])); // [80, 0]
  console.log(rowWeights([100, 50])); // [100, 50]
  console.log(rowWeights([70, 58, 75, 34, 91])); // [236, 92]
  console.log(rowWeights([0])); // [0, 0]
}
