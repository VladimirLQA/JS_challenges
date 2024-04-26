// Write a function which gets an array and an element and returns
// an array with this element at the end

const testArray = [1, 2, 3, 4];

const toTheEnd = (arr, element) => [...arr, element];
// const arrayCopy = [...arr];
// const arrayCopy = [].concat(arr);
// const arrayCopy = Array.from(arr);

console.log(toTheEnd(testArray, 'el'));
console.log(testArray);

// Write a function which can concatenate 2 arrays

const testArray2 = ['1', '2', '3', '4'];

const concatArrays = (arr1, arr2) => [...arr1, ...arr2];

console.log(concatArrays(testArray, testArray2));

// Remove all duplicates in the array

const duplicates = [1, 2, 2, 3, 4, 4];
{
  const removeDuplicates = (array) => [...new Set(array)];

  console.log(removeDuplicates(duplicates));
}

{
  const removeDuplicates = (array) =>
    array.reduce((result, el) => result.includes(el)
      ? result : [...result, el], []);

  console.log(removeDuplicates(duplicates));
}

// Sort array of objects by author's lastname

const books = [
  { name: 'Warcross', author: 'Marie Lu' },
  { name: 'Harry Potter', author: 'Joanne Rowling' },
  { name: 'The Hunger Games', author: 'Suzanne Collins' },
];

books.sort((book1, book2) => {
  const aLastName1 = book1.author.split(' ')[1];
  const aLastName2 = book2.author.split(' ')[1];
  return aLastName1 < aLastName2 ? -1 : 1;
});

console.log(books);
