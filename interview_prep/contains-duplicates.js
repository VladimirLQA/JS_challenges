{
  const containsDuplicates = (arr) => {
    return [...new Set(arr)].length !== arr.length;
  };

  console.log(containsDuplicates([1, 2, 3, 1]));
  console.log(containsDuplicates([1, 2, 3]));
}

{
  const containsDuplicates = (arr) => {
    const set = new Set();

    for (const value of arr) {
      if (set.has(value)) return true;
      set.add(value);
    }
    return false;
  };

  console.log(containsDuplicates([1, 2, 3, 1]));
  console.log(containsDuplicates([1, 2, 3]));
}
