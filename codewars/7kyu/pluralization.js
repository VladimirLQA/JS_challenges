/*
 Your code should take an English noun with a regular
 plural form and return its plural.

 Rules for pluralization in English:
 - If a singular noun ends in '-s', '-x', '-z', '-ch' or '-sh', add '-es'
 - If a singular noun ends with a consonant and '-y', change '-y' to '-ies'.
 - All other words just add '-s'
 - None of the tests end in '-f' or '-o' and none are irregular nouns (e.g. child, mouse etc.)

 Examples
  table -> tables,
  window -> windows,
  church -> churches,
  watch -> watches,
  bus -> buses,
  box -> boxes,
  buzz -> buzzes,
  fly -> flies
*/

const pluralization = (noun) => {
  if (/s$|x$|z$|ch$|sh$/.test(noun)) return noun + 'es';
  else if (/[aeiou]y$/.test(noun)) return noun + 's';
  else if (/[^aeiou]y$/.test(noun)) return noun.slice(0, -1) + 'ies';
  else return noun + 's';
};

console.log(pluralization('fly'));
console.log(pluralization('table'));
console.log(pluralization('church'));
console.log(pluralization('buzz'));
console.log(pluralization('box'));
