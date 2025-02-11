/*
  https://www.codewars.com/kata/5829c2c8ef8d4474300000fa/javascript
*/

class Student {
  constructor(age, gpa, fullName) {
    this.age = age;
    this.gpa = gpa;
    this.fullName = fullName;
  }
}

const students = [
  new Student(23, 88, 'David Goodman'),
  new Student(25, 82, 'Mark Rose'),
  new Student(22, 90, 'Jane Doe'),
  new Student(25, 90, 'Jane Dane'),
];

{
  const getFirstLetterOfLastName = (fullName) =>
    fullName.split(' ')[1].at(0).toLowerCase();
  const compareValues = (a, b, order = 'asc') =>
    order === 'asc' ? a < b ? -1 : a > b ? 1 : 0 : a < b ? 1 : a > b ? -1 : 0;

  const sort = (students) => students.sort((s1, s2) =>
    compareValues(s1.gpa, s2.gpa, 'desc') ||
    compareValues(getFirstLetterOfLastName(s1.fullName), getFirstLetterOfLastName(s2.fullName))  ||
    compareValues(s1.age, s2.age),
  ).map(({ fullName }) => fullName).join(',');

  console.log(sort(students));  // "Jane Doe,Jane Dane,David Goodman,Mark Rose"


}
