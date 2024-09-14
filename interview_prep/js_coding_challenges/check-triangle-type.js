/*
 Write a function called checkTriangleType that takes three
 parameters representing the lengths of the sides of a triangle.
 The function should return a string indicating the type of
 triangle: equilateral, isosceles or scalene.
*/
{
  const checkTriangleType = (s1, s2, s3) =>
    s1 === s2 && s2 === s3
      ? 'equilateral'
      : s1 === s2 || s1 === s3 || s2 === s3
        ? 'isosceles' : 'scalene';

  console.log(checkTriangleType(3, 3, 3));
  console.log(checkTriangleType(3, 4, 3));
  console.log(checkTriangleType(5, 8, 6));
}
