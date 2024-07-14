/*
 Implement a function that accepts 3 integer values a, b, c.
 The function should return true if a triangle can be built with
 the sides of given length and false in any other case.

 (In this case, all triangles must have surface greater than 0 to be accepted).
*/

const isTriangle = (a, b, c) => a + c > b && a + b > c && b + c > a;

console.log(isTriangle(1, 2, 2));
console.log(isTriangle(-1, 2, 2));
console.log(isTriangle(-1, -2, 2));
console.log(isTriangle(4, 5, 2));
console.log(isTriangle(0, 5, 2));
console.log(isTriangle(0, 0, 0));
