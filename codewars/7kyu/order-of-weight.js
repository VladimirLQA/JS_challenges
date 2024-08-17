/*
Given an array of strings, sort the array into order of weight from light to heavy.
Weight units are grams(G), kilo-grams(KG) and tonnes(T).
Arrays will always contain correct and positive values aswell as uppercase letters.
*/

{
  const map = {
    KG: (w) => w * 1000,
    T: (w) => w * 1000000,
  };

  const toGramms = (w) => {
    const unit = w.match(/[a-z]+/gi)[0];
    w = w.match(/\d+/g)[0];
    if (unit === 'G') return +w;
    return map[unit](w);
  };

  const arrange = (arr) => arr.sort((a, b) => toGramms(a) - toGramms(b));

  console.log(arrange(['100T', '10KG', '1G']));
  console.log(arrange(['1T', '10000G', '1KG']));
}
{
  const arrange = (arr) =>
    ((val) => arr.sort((a, b) => val(a) - val(b)))((val) =>
      parseInt(val) * { G: 1, KG: 1000, T: 1000000 }[val.replace(/\d/g, '')]);

  console.log(arrange(['100T', '10KG', '1G']));
  console.log(arrange(['1T', '10000G', '1KG']));
}
{
  const getWeight = (w) =>
    parseInt(w.replace('G', '').replace('KG', '000').replace('T', '000000'));

  const arrange = (arr) => arr.sort((a, b) => getWeight(a) - getWeight(b));

  console.log(arrange(['100T', '10KG', '1G']));
  console.log(arrange(['1T', '10000G', '1KG']));
}
