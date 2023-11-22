const words = ["banana", "grapefruit", "banana",
  "grapefruit", "banana", "orange", "orange",
  "orange", "orange"];

{
  const sortAndIndividualize = (array) => {
    const hash = {};

    array.forEach((el) => {
      hash[el] = (hash[el] || 0) + 1;
    });

    let temp = 0;

    return [...Object.entries(hash)]
      .reduce((acc, currEl, index, array) => {
        if (currEl[1] > temp) acc.unshift(currEl[0]);
        else acc.push(currEl[0]);

        temp = currEl[1];
        return acc;
      }, []);
  };


  console.log(sortAndIndividualize(words)); // ["orange", "banana", "grapefruit"]
}

{
  const sortAndIndividualize = (array) => {

    let hash = array.reduce((acc, currEl) => {
      acc[currEl] = (acc[currEl] || 0) + 1;
      return acc;
    }, {});

    const keys = Object.keys(hash);

    return keys.sort((key1, key2) => {
      return hash[key2] - hash[key1];
    });
  };

  console.log(sortAndIndividualize(words)); // ["orange", "banana", "grapefruit"]
}