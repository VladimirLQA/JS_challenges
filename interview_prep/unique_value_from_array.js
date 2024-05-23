const testArray = [1, 1, 2, 3, 3, 3, 4, 5, 5, 7, 8, 9, 9];

{
  const getElementsWithoutRepeat = (array) => {
    const result = [];

    for (let i = 0; i < array.length; i++) {
      const currElem = array[i];
      let count = 0;

      for (let j = 0; j < array.length; j++) {
        if (currElem === array[j]) count++;
      }

      if (count === 1) result.push(currElem);
    }
    return result;
  };

  console.log(getElementsWithoutRepeat(testArray)); // [2, 4, 7, 8]
}

{
  const getElementsWithoutRepeat = (array) => {
    const result = [];
    const hash = [...array].reduce((acc, el) => {
      acc[el] = (acc[el] || 0) + 1;
      return acc;
    }, {});

    Object.keys(hash).map((el) => {
      if (hash[el] === 1) result.push(el);
    });
    return result;
  };

  console.log(getElementsWithoutRepeat(testArray)); // [2, 4, 7, 8]
}
