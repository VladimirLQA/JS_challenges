/*
  Given the API rand7() that generates a uniform random integer in the range [1, 7],
  write a function rand10() that generates a uniform random integer in the range [1, 10].
  You can only call the API rand7(), and you shouldn't call any other API.
  Please do not use a language's built-in random API.
*/

function rand7() {
  return Math.floor(Math.random() * 7) + 1;
}

function rand10() {
  while (true) {
    const row = rand7();
    const col = rand7();
    const idx = (row - 1) * 7 + col; // 1 to 49

    if (idx <= 40) {
      return (idx % 10) + 1; // map in range 1-10
    }
  }

}

console.log(rand10());
