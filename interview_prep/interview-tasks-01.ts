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
  // eslint-disable-next-line no-unused-vars
  type MapCallBack<T> = (element: T, index: number, array: readonly T[]) => T;

  const map = <T>(initialArray: T[], callBack: MapCallBack<T>) =>
    initialArray.reduce<T[]>((acc, currentValue, index, originalArray) => {
      const callBackResult = callBack(currentValue, index, originalArray);
      acc.push(callBackResult);
      return acc;
    }, []);

  type FilterCallBack<T> =
  // eslint-disable-next-line no-unused-vars
    (element: T, index: number, array: readonly T[]) => boolean;

  const filter = <T>(initialArray: T[], callBack: FilterCallBack<T>) =>
    initialArray.reduce<T[]>((acc, currentValue, index, originalArray) => {
      if (callBack(currentValue, index, originalArray)) acc.push(currentValue);
      return acc;
    }, []);
}
