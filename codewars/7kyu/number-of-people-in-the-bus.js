const testCase1 = [
  [10, 0],
  [3, 5],
  [5, 8],
]; // 5
const testCase2 = [
  [3, 0],
  [9, 1],
  [4, 10],
  [12, 2],
  [6, 1],
  [7, 10],
]; // 17
const testCase3 = [
  [3, 0],
  [9, 1],
  [4, 8],
  [12, 2],
  [6, 1],
  [7, 8],
]; // 21
const testCase4 = [[0, 0]]; // 0

{
  const countPeopleInTheBus = (arr) => arr.reduce((amount, [on, out]) => amount + on - out, 0);

  console.log(countPeopleInTheBus(testCase1));
  console.log(countPeopleInTheBus(testCase2));
  console.log(countPeopleInTheBus(testCase3));
  console.log(countPeopleInTheBus(testCase4));
}
