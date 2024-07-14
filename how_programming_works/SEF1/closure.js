/*
  seq(x => x + 7)
     (x => x * 2)(5)  // Result: 17

  seq(x => x * 2)
     (x => x + 7)(5)  // Result: 24

  seq(x => x + 1)
     (x => x * 2)
     (x => x / 3)
     (x => x - 4)(7)  // Result: 3
*/

{
  const seq = (f) => (g) =>
    typeof g === 'number' ? f(g) : seq((x) => f(g(x)));

  console.log(seq((x) => x + 7)((x) => x * 2)(5));
  console.log(seq((x) => x * 2)((x) => x + 7)(5));
  console.log(seq((x) => x + 1)((x) => x * 2)((x) => x / 3)((x) => x - 4)(7));
}

{
  const array = () => {
    const data = [];
    const get = (index) => data[index];
    get.push = (value) => data.push(value);
    get.pop = () => data.pop();
    return get;
  };

  const arr = array();
  arr.push('first');
  arr.push('second');
  arr.push('third');

  console.log(arr(0)); // first
  console.log(arr(1)); // second
  console.log(arr(2)); // third

  console.log(arr.pop()); // third
  console.log(arr.pop()); // second
  console.log(arr.pop()); // first

  console.log(arr.pop()); // undefined
}
