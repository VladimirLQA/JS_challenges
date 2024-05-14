/*
 * Task: Create a higher-order function called "mapWithFilter" that takes an array of items
 * and two functions: a mapping function and a filtering function.
 * The mapWithFilter function should apply the mapping function to each item
 * in the array and then filter the results using the filtering function.
 * Ensure that the function's input and output types are generic.
 * Write test cases to demonstrate the functionality of this higher-order function with different data types.*/

const testArrayNumbers = [1, 5, 6, 9, 11, 15];
const testArrayStrings = ['123', 'first ',
  'don\'t judge book by it\'s cover', '9'];

type FilterCallBack<T> = (element: T, index: number, array: T[]) => boolean;
type MapCallBack<T, U> = (element: T, index: number, array: T[]) => U;

const mapper: MapCallBack<string | number, any> =
  (value, index, array) => {
    if (typeof value === 'string') {
      return value.toUpperCase();
    } else {
      return value ** 3;
    }
  };

const filterFunction: FilterCallBack<string | number> =
  (value, index, array) => {
    if (typeof value === 'string') {
      return value.length > 5;
    } else {
      return value > 729;
    }
  };

const mapWithFilter =
  <T, U>(array: T[], mapFunc: MapCallBack<T, U>, filterFunc: FilterCallBack<U>):
    U[] => array.map(mapFunc).filter(filterFunc);


console.log(mapWithFilter(testArrayNumbers, mapper, filterFunction));
console.log(mapWithFilter(testArrayStrings, mapper, filterFunction));
