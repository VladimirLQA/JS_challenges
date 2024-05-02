// dof - dfo -> true
// dof - dgo -> false
// doof - ddfo -> false

const isEquelString = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  return (
    str2.toLowerCase().split('').sort().join('') === str1.toLowerCase().split('').sort().join('')
  );
};

console.log(isEquelString('dof', 'dfo'));
console.log(isEquelString('dof', 'dgo'));
console.log(isEquelString('doof', 'ddfo'));
console.log('\t');

const isEquelString2 = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  const sortedStr1 = [...str1.toLowerCase()].sort().join('');
  const sortedStr2 = [...str2.toLowerCase()].sort().join('');
  return sortedStr1.localeCompare(sortedStr2) === 0 ? true : false;
};

console.log(isEquelString2('dof', 'dfo'));
console.log(isEquelString2('dof', 'dgo'));
console.log(isEquelString('doof', 'ddfo'));
console.log('\t');

const isEquelString3 = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  const sortedStr1 = [...str1.toLowerCase()].sort();
  const sortedStr2 = [...str2.toLowerCase()].sort();
  return sortedStr1.every((char, idx) => char === sortedStr2[idx]);
};

console.log(isEquelString3('dof', 'dfo'));
console.log(isEquelString3('dof', 'dgo'));
console.log(isEquelString3('doof', 'ddfo'));
