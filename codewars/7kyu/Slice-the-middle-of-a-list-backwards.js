{
	const reverseMiddle = (list) => {
		let result = [];

		const middle = Math.floor(list.length / 2);

		if (list.length % 2 === 0) result.push(list[middle - 1], list[middle]);
		else result.push(list[middle - 1], list[middle], list[middle + 1]);
		return result.reverse();
	};

	console.log(reverseMiddle([1, 2, 3, 4, 5])); // [4, 3, 2]
	console.log(reverseMiddle([1, 2, 3, 4, 5, 6])); // [4, 3]
}

{
	const reverseMiddle = (list) => {
		const resultLength = list.length % 2 === 0 ? 2 : 3;
		const relativeMiddle = Math.floor(list.length / 2) - 1;
		return list.splice(relativeMiddle, resultLength).reverse();
	};

	console.log(reverseMiddle([1, 2, 3, 4, 5])); // [4, 3, 2]
	console.log(reverseMiddle([1, 2, 3, 4, 5, 6])); // [4, 3]
}
