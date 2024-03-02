{
	const party1 = new Map([
			['Ivan', 10],
			['Danya', 5],
			['Roma', 7],
		]);

	const party2 = new Map([
			['Elena', 5],
			['Danya', 5],
			['Katya', 6],
		]);

	// not exactly intersection 
	const getMapIntersection = (map1, map2) => {
		const sameAmountName = [];
		const intersection = [];

		const valuesFromSecondMap = map2.values();

		map1.forEach((value, key, _) => {
			let valueFromFirstMap = map1.get(key);	
			let valueFromSecondMap = map2.get(key);	

			if(map2.has(key)) {
				if(valueFromFirstMap === valueFromSecondMap) intersection.push(value);
			}

			map2.forEach((secValue, secKey) => {
				if(secValue === value && key !== secKey) sameAmountName.push(secKey);
			})

		});

		return [intersection, sameAmountName];
	}

	// getMapIntersection(party1, party2);
	console.log(getMapIntersection(party1, party2));
}