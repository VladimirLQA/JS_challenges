/*
 Complete the method that takes a sequence of objects
 with two keys each: country or state, and capital.
 Keys may be symbols or strings.

 The method should return an array of sentences
 declaring the state or country and its capital.
*/

{
  const capital = (capitals) =>
    capitals.map((c) =>
      `The capital of ${c.state || c.country} is ${c.capital}`);

  console.log(capital([
    { 'state': 'Maine', capital: 'Augusta' },
    { country: 'Spain', 'capital': 'Madrid' },
  ]));
}
