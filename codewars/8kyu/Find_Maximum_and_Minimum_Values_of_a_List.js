/*
* Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language )
*  that receive a list of integers as input, and return the largest and lowest number in that list, respectively.
*/

{
    let min = (list) => Math.min(...list);
    let max = (list) => Math.max(...list);

    console.log(min([-52, 56, 30, 29, -54, 0, -110])); // -110
    console.log(min([42, 54, 65, 87, 0])); // 0
    console.log(max([4,6,2,1,9,63,-134,566])); // 566
    console.log(max([5])); // 5
}

console.log(`================================================`);

{
    const min = (list) => list.reduce((min_val, val) => min_val <= val ? min_val : val);
    const max = (list) => list.reduce((max_val, val) => max_val > val ? max_val : val);

    console.log(min([-52, 56, 30, 29, -54, 0, -110])); // -110
    console.log(min([42, 54, 65, 87, 0])); // 0
    console.log(max([4,6,2,1,9,63,-134,566])); // 566
    console.log(max([5])); // 5
}

console.log(`================================================`);

{
    const min = list => list.sort((a, b) => a - b)[0];
    const max = list => list.sort((a, b) => b - a)[0];

    console.log(min([-52, 56, 30, 29, -54, 0, -110])); // -110
    console.log(min([42, 54, 65, 87, 0])); // 0
    console.log(max([4,6,2,1,9,63,-134,566])); // 566
    console.log(max([5])); // 5
}