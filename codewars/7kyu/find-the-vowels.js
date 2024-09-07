/*
 We want to know the index of the vowels in a given word, 
 for example, there are two vowels in the word super (the second and fourth letters).

 So given a string "super", we should return a list of [2, 4].

 Some examples:
  Mmmm  => []
  Super => [2,4]
  Apple => [1,5]
  YoMama -> [1,2,4,6]
 NOTES
  Vowels in this context refers to: a e i o u y (including upper case)
  This is indexed from [1..n] (not zero indexed!)
*/

{
  const vowelIndices = (word) =>
  	Array.from(word.matchAll(/[aeiouy]/gi), m => console.log(m));

  console.log(vowelIndices('Mmmm'));
  console.log(vowelIndices('Super'));
  console.log(vowelIndices('Apple'));
  console.log(vowelIndices('YoMama'));
}
{
  const vowelIndices = (word) =>
  	[...word].reduce((acc, char, i) =>
  		/[aeiouy]/gi.test(char)
  		? [...acc, ++i]
  		: acc, []);

  console.log(vowelIndices('Mmmm'));
  console.log(vowelIndices('Super'));
  console.log(vowelIndices('Apple'));
  console.log(vowelIndices('YoMama'));
}