{

  const alphabet = (arr) => {
    const sortedCopy = [...arr].sort((a, b) => a - b);
    return sortedCopy[7] / sortedCopy[sortedCopy[0] * sortedCopy[1] == sortedCopy[2] ? 3 : 2];
  };


  console.log(alphabet([2, 3, 4, 1, 12, 6, 2, 4])); // 4
  console.log(alphabet([20,10,6,5,4,3,2,12])); // 5
  console.log(alphabet([2,6,7,3,14,35,15,5])); // 7
}

console.log(`<<<<<<<<<<<<<>>>>>>>>>>>>>>>>`);

{
  const alphabet = ns => {
    const [a, b, c1, c2, x, y, z, cd] = ns.sort((a,b) => a - b)
    return a * b === c1 ? cd / c2 : cd / c1
  };

  console.log(alphabet([2, 3, 4, 1, 12, 6, 2, 4])); // 4
  console.log(alphabet([20,10,6,5,4,3,2,12])); // 5
  console.log(alphabet([2,6,7,3,14,35,15,5])); // 7
}