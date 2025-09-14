type ProductTuple = [string, number];
type Product = { name: string; price: number };

const numbers = [5, -2, 8, -7, 3, 0, 12, -4, 9, 6, -5, 11];
const products = [
  ['bread', 12],
  ['milk', 10.5],
  ['cheese', 5],
  ['apple', 3.8],
  ['banana', 4.2],
  ['chocolate', 3],
  ['coffee', 4.5],
  ['butter', 2.5],
  ['tea', 2],
  ['yogurt', 1.8],
] as ProductTuple[];


const income = (item: number): boolean => item > 0;
const expenses = (item: number): boolean => item < 0;
const sumReducer = (acc: number, curr: number): number => acc + curr;
const calculate = (array: number[], isIncome: boolean): number =>
  array
    .filter(isIncome ? income : expenses)
    .reduce(sumReducer, 0);

const calculateIncome = (array: number[]): number => calculate(array, true);
const calculateExpenses = (array: number[]): number => calculate(array, false);
const toProductObject = ([name, price]: ProductTuple): Product =>
  ({ name, price });

const sortByPrice = (products: Product[]): Product[] =>
  [...products].sort((a, b) => a.price - b.price);

const getAffordableProducts = (
  money: number,
  products: Product[],
): Product[] => {
  const { affordableProducts } = products.reduce(
    (acc, product) => {
      if (acc.remainingBudget >= product.price) {
        return {
          affordableProducts: [...acc.affordableProducts, product],
          remainingBudget: acc.remainingBudget - product.price,
        };
      }
      return acc;
    },
    {
      affordableProducts: [] as Product[],
      remainingBudget: money,
    },
  );

  return affordableProducts;
};

const extractNames = (products: Product[]): string[] =>
  products.map((product) => product.name);

const maxProductsListByNames = (
  money: number[],
  productsData: ProductTuple[],
) => {
  const totalIncome = calculateIncome(money);
  const totalExpenses = Math.abs(calculateExpenses(money));
  const availableMoney = totalIncome - totalExpenses;

  if (availableMoney <= 0) return [];

  const result = [productsData]
    .map((data) => data.map(toProductObject))
    .map(sortByPrice)
    .map((products) => getAffordableProducts(availableMoney, products))
    .map(extractNames)
    .flat(Infinity);

  return result;
};

console.log(maxProductsListByNames(numbers, products));
