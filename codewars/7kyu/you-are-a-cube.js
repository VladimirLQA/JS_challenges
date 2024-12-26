/*

*/
{
  const youAreACube = (value) => {
    for (let i = 1; i <= value; i++) {
      if (Math.pow(i, 3) === value) return true;
    }
    return false;
  };

  console.log(youAreACube(27)); // true
  console.log(youAreACube(1)); // true
  console.log(youAreACube(99)); // false
  console.log(youAreACube(2)); // false
}
{

  const youAreACube = (value) => !(Math.cbrt(value) % 1);
  console.log(youAreACube(27)); // true
  console.log(youAreACube(1)); // true
  console.log(youAreACube(99)); // false
  console.log(youAreACube(2)); // false
}
