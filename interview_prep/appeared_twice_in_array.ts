/* Given an integer array nums of length n where all the integers of nums are
integers in the range [1, n] and each integer appears once or twice,
return an array of allthe integers athat appears twice */

/*
Example 1:
Input: nums = [4, 3, 2, 7, 8, 2, 3, 1];
Output: [2, 3]

Example 2:
Input: nums = [1];
Output: []
*/

const testNums1 = [4, 3, 2, 7, 8, 2, 3, 1];
const testNums2 = [1];

type TempHash = Record<string, number>;

{
  const getElAppearedTwice = (array: number[]) => {
    const hash: TempHash = array.reduce((acc: TempHash, currEl: number) => {
      acc[currEl] = (acc[currEl] || 0) + 1;
      return acc;
    }, {});

    return Object.keys(hash)
      .filter((key) => hash[key] === 2)
      .map(Number);
  };

  console.log(getElAppearedTwice(testNums1));
  console.log(getElAppearedTwice(testNums2));
}
