const likes = (names) => {
  if (!names.length) return 'no one likes this';
  if (names.length === 1) return `${names[0]} likes this`;
  if (names.length === 2) return `${names[0]} and ${names[1]} like this`;
  if (names.length === 3) { return `${names[0]}, ${names[1]} and ${names[2]} like this`; }
  if (names.length >= 4) { return `${names[0]}, ${names[1]} and ${names.length} like this`; }
};

console.log(likes([]));
console.log(likes(['Peter']));
console.log(likes(['Jacob', 'Alex']));
console.log(likes(['Max', 'John', 'Mark']));
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']));
