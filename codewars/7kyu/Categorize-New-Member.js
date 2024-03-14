{
	const openOrSenior = (data) => {
		const memberships = [];

		data.forEach((member) => {
			if (member[0] >= 55 && member[1] > 7) memberships.push('Senior');
			else memberships.push('Open');
		});
		return memberships;
	};

	console.log(
		openOrSenior([
			[45, 12],
			[55, 21],
			[19, -2],
			[104, 20],
		]),
	); // ['Open', 'Senior', 'Open', 'Senior']
}

{
	const determineMembership = (member) => (member[0] >= 55 && member[1] > 7 ? 'Senior' : 'Open');
	const openOrSenior = (data) => data.map(determineMembership);
	console.log(
		openOrSenior([
			[45, 12],
			[55, 21],
			[19, -2],
			[104, 20],
		]),
	); // ['Open', 'Senior', 'Open', 'Senior']
}

{
	const openOrSenior = (data) =>
		data.map(([age, handicap]) => (age >= 55 && handicap > 7 ? 'Senior' : 'Open'));
	console.log(
		openOrSenior([
			[45, 12],
			[55, 21],
			[19, -2],
			[104, 20],
		]),
	); // ['Open', 'Senior', 'Open', 'Senior']
}
