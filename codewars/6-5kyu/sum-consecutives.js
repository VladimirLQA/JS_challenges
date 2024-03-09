{
	const sumConsecutives = (arr) => {
		let result = [];
		let temp = 0;
		for (let i = 0; i < arr.length; i++) {
			let current = arr[i];
			let next = arr[i + 1];

			temp += current;

			if (current !== next) {
				result.push(temp);
				temp = 0;
			}
		}
		return result;
	};

	console.log(sumConsecutives([1, 4, 4, 4, 0, 4, 3, 3, 1])); // [1,12,0,4,6,1]
	console.log(sumConsecutives([1, 1, 7, 7, 3])); // [2,14,3]
	console.log(sumConsecutives([-5, -5, 7, 7, 12, 0])); // [-10,14,12,0]
	console.log(sumConsecutives([3, 3, 3, 3, 1])); // [12, 1]
}

{
	const sumConsecutives = (s) =>
		s.reduce((p, c, i, s) => (c == s[i - 1] ? (p[p.length - 1] += c) : p.push(c), p), []);

	console.log(sumConsecutives([1, 4, 4, 4, 0, 4, 3, 3, 1])); // [1,12,0,4,6,1]
	console.log(sumConsecutives([1, 1, 7, 7, 3])); // [2,14,3]
	console.log(sumConsecutives([-5, -5, 7, 7, 12, 0])); // [-10,14,12,0]
	console.log(sumConsecutives([3, 3, 3, 3, 1])); // [12, 1]
}
