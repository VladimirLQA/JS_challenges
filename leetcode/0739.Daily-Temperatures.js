/*
 Given an array of integers temperatures represents the daily temperatures,
 return an array answer such that answer[i] is the number of days
 you have to wait after the ith day to get a warmer temperature.
 If there is no future day for which this is possible,
  keep answer[i] == 0 instead.

Example 1:
Input: temperatures = [73,74,75,71,69,72,76,73]
Output: [1,1,4,2,1,1,0,0]

Example 2:
Input: temperatures = [30,40,50,60]
Output: [1,1,1,0]

Example 3:
Input: temperatures = [30,60,90]
Output: [1,1,0]
*/

const dailyTemperatures = (days) => {
  const result = new Array(days.length).fill(0);
  const stack = [];

  for (let i = days.length - 1; i >= 0; i--) {
    while (stack.length && days[i] >= stack[stack.length - 1][0]) {
      stack.pop();
    }

    if (stack.length && days[i] < stack[stack.length - 1][0]) {
      result[i] = stack[stack.length - 1][1] - i;
    }

    stack.push([days[i], i]);
  }
  return result;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])); // [1,1,4,2,1,1,0,0]

const dailyTemperatures2 = (days) => {
  const result = new Array(days.length).fill(0);
  const stack = [];

  for (let i = 0; i < days.length; i++) {
    while (stack.length && days[i] > days[stack[stack.length - 1]]) {
      const top = stack.pop();
      result[top] = i - top;
    }
    stack.push(i);
    console.log(`stack ${i} ~ ${stack}`);
  }

  return result;
};

console.log(dailyTemperatures2([73, 74, 75, 71, 69, 72, 76, 73, 77])); // [1,1,4,2,1,1,0,0]
