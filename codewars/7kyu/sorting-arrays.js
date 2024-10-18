/*
Given two arrays, a1 and a2, sort the elements of a2 based
on the the index of the word in a1 that begins with the same letter.

 Example 1
  a1 = ['giraffe', 'orangutan', 'impala', 'elephant', 'rhino']
  a2 = ['rattlesnake', 'eagle', 'geko', 'iguana', 'octopus']
   returns ['geko', 'octopus', 'iguana', 'eagle', 'rattlesnake']
*/
{
  const sortArray = (a1 = [], a2 = []) =>
    a2.reduce((result, w) => {
      const idx = a1.findIndex((word) => word[0] === w[0]);
      result[idx] = w;
      return result;
    }, []);

  console.log(
    sortArray(
      ['giraffe', 'orangutan', 'impala', 'elephant', 'rhino'],
      ['rattlesnake', 'eagle', 'geko', 'iguana', 'octopus'],
    ),
  );
}
{
  const sortArray = (a1 = [], a2 = []) =>
    a1.map((w) => a2.find((word) => word[0] === w[0]));

  console.log(
    sortArray(
      ['giraffe', 'orangutan', 'impala', 'elephant', 'rhino'],
      ['rattlesnake', 'eagle', 'geko', 'iguana', 'octopus'],
    ),
  );
}
