/*
Write a function to convert a name into initials.
This kata strictly takes two words with one space in between them.
The output should be two capital letters with a dot separating them.

It should look like this:
Sam Harris => S.H
 */

const abbrevName = (name) =>
  name.split(' ').map((p) => p.at(0).toUpperCase()).join('.');

console.log(abbrevName('Sam Harris'));

const abbrevName2 = (name) =>
  name.match(/\b\w/g).join('.').toUpperCase();

console.log(abbrevName2('Sam Harris'));
