/* 

function .sort is mutable for array !!! (it means that after execution
    of this function original array would be also sorted)

*/

const arr = [5, 2, 3, 4, 1, 7];

// expect(arr).toDeepEqual(arr.sort()) // will sort original array --- invalid check

// //to avoid error we can do next
// expect(arr).toDeepEqual([...arr].sort()) // with spread operator
// // or this
// expect(arr).toDeepEqual(arr.map((item) => item).sort())

// WHAT RETURN OF .MAP FUNCTION WITH NO ARGS???
/** We will get the same array but with execution of function that return
 * nothing, in JS function that returns nothing we get 'undefind'
 */
// console.log(arr.map(()=>{}))

arr.map((item, index, arrr) => {
  //arguments of .map call back
  console.log(item, index, arrr);
});

arr.reduce((acc, item, index, arr) => {
  //arguments of .reduce call back
  console.log(acc, item, index, arr);
});
