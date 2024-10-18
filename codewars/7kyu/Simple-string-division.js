/*
 In this Kata, you will be given a number in form of a string and
 an integer k and your task is to insert k commas into the string
 and determine which of the partitions is the largest.

 For example:
  solve('1234',1) = 234 because ('1','234') or ('12','34') or ('123','4').
  solve('1234',2) = 34 because ('1','2','34') or ('1','23','4') or ('12','3','4'). 
  solve('1234',3) = 4
  solve('2020',1) = 202
*/
{
	const solve = (str, k) => {
		const max = [];
		for (let i = 0; i < str.length; i++) {
			max.push(str.slice(i, i + str.length - k));
		}
		return Math.max(...max);
	};

	console.log(solve('123', 1));
	console.log(solve('1234', 2));
	console.log(solve('1234', 3));
	console.log(solve('2020', 1));
}
{
	const solve = (str, k) => {
		const length = str.length - k;
		let arr = Array.from({ length: str.length }, (_, i) => i);
		const max = arr.map((_, i) => +str.slice(i, i + length));
		return Math.max(...max);
	};

	console.log(solve('123', 1));
	console.log(solve('1234', 2));
	console.log(solve('1234', 3));
	console.log(solve('2020', 1));
}
{
	const solve = (str, k) =>
		Math.max(...[...str].map((_, idx) => str.slice(idx, idx + str.length - k)));

	console.log(solve('123', 1));
	console.log(solve('1234', 2));
	console.log(solve('1234', 3));
	console.log(solve('2020', 1));
}
