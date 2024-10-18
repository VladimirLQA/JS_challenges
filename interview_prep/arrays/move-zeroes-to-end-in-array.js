const testArr = [false, 0, 1, 2, 3, 0, 4];

// without saving the order
{
  const moveZeroesToArrayEnd = (arr) =>
    arr.reduce((res, currentEl) => {
      if (currentEl === 0) {
        res.push(currentEl);
      } else {
        res.unshift(currentEl);
      }
      return res;
    }, []);

  console.log(moveZeroesToArrayEnd(testArr));
}

{
  const moveZeroesToArrayEnd = (arr) => (
    arr.reduce(
      (res, currentEl, idx) =>
        currentEl === 0 ? (arr.splice(idx, 1), arr.push(0)) : res,
      [],
    ),
    arr
  );

  console.log(moveZeroesToArrayEnd(testArr));
}
