/*
 Given a string, remove any characters that are unique from the string.
 Example:
  input: "abccdefee"
  output: "cceee"
*/
{
	const onlyDuplicates = (str) => {
		const duplicates = [...str].filter(
			(char, idx, arr) => idx !== arr.indexOf(char),
		);
		return [...str].filter((char) => duplicates.includes(char)).join('');
	};

	console.log(onlyDuplicates('plastic')); // ''
	console.log(onlyDuplicates('hill')); // 'll'
	console.log(onlyDuplicates('gorgeous')); // 'gogo'
}
{
	const onlyDuplicates = (str) =>
		[...str]
			.filter((char) => str.indexOf(char) !== str.lastIndexOf(char))
			.join('');

	console.log(onlyDuplicates('plastic')); // ''
	console.log(onlyDuplicates('hill')); // 'll'
	console.log(onlyDuplicates('gorgeous')); // 'gogo'
}
