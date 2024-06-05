{
  const testit = (n) => n.toString(2).replace(/0/g, '').length;
  console.log(testit(0)); // 0
  console.log(testit(2)); // 1
  console.log(testit(3)); // 2
  console.log(testit(8)); // 1
  console.log(testit(10000)); // 5
}

{
  const testit = (n) => (n.toString(2).match(/1/g) || []).length;
  console.log(testit(0)); // 0
  console.log(testit(2)); // 1
  console.log(testit(3)); // 2
  console.log(testit(8)); // 1
  console.log(testit(10000)); // 5
}
