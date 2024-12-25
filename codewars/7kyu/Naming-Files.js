/*
  https://www.codewars.com/kata/5829994cd04efd4373000468/javascript
*/

{
  const replaceByPattern = (str, replacement, pattern = /<index_no>/) =>
    str.replace(new RegExp(pattern, 'g'), replacement);

  const nameFile = (fmt, nbr, start) =>
    nbr <= 0 || nbr % 1 !== 0 || start % 1 !== 0
      ? []
      : Array(nbr).fill(fmt).map((s, i) => replaceByPattern(s, start + i));

  console.log(nameFile('IMG <index_no>', 4, 1)); // ["IMG 1", "IMG 2", "IMG 3", "IMG 4"]
  console.log(nameFile('<file> number <index_no>', 5, 0)); //  ["<file> number 0", "<file> number 1", "<file> number 2", "<file> number 3", "<file> number 4"]
  console.log(nameFile('<file_no> number <index_no>', -1, 0)); // []
  console.log(nameFile('#<index_no> #<index_no>', 3, -2)); //  ["#-2 #-2", "#-1 #-1", "#0 #0"]
}
{

  const nameFile = (fmt, nbr, start) =>
    nbr <= 0 || nbr % 1 !== 0 || start % 1 !== 0
      ? []
      : Array.from(
        { length: nbr }, (_, i) => fmt.replace(/<index_no>/g, start + i),
      );

  console.log(nameFile('IMG <index_no>', 4, 1)); // ["IMG 1", "IMG 2", "IMG 3", "IMG 4"]
  console.log(nameFile('<file> number <index_no>', 5, 0)); //  ["<file> number 0", "<file> number 1", "<file> number 2", "<file> number 3", "<file> number 4"]
  console.log(nameFile('<file_no> number <index_no>', -1, 0)); // []
  console.log(nameFile('#<index_no> #<index_no>', 3, -2)); //  ["#-2 #-2", "#-1 #-1", "#0 #0"]
}

