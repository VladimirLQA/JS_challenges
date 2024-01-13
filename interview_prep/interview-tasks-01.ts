{
  const getId = () => {
    let count: number = 0;
    return () => count++;
  };

  const id = getId();
  console.log(id());
  console.log(id());
  console.log(id());
  console.log(id());
  console.log(id());
}

{
  // write methods .map() & .filter() with .reduce method under the hood

  const map = <T>(initialArray: T[], callBack: (element: T, index: number, array: T[]) => T) => {
    return initialArray.reduce<T[]>((acc, currentValue, index, originalArray) => {
      const callBackResult = callBack(currentValue, index, originalArray);
      acc.push(callBackResult);
      return acc;
    }, []);
  };

  const filter = <T>(
    initialArray: T[],
    callBack: (element: T, index: number, array: T[]) => boolean,
  ) => {
    return initialArray.reduce<T[]>((acc, currentValue, index, originalArray) => {
      if (callBack(currentValue, index, originalArray)) acc.push(currentValue);
      return acc;
    }, []);
  };
}
