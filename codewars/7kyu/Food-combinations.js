/*
https://www.codewars.com/kata/565f448e6e0190b0a40000cc/javascript
*/

const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
const phrase = `You know what's actually really good? `;

{
  const actuallyReallyGood = (foods) => {
    if (foods.length >= 2) {
      return `${
        phrase + capitalize(foods[0])
      } and more ${foods[1].toLowerCase()}.`;
    } else if (foods.length === 1) {
      return `${
        phrase + capitalize(foods[0])
      } and more ${foods[0].toLowerCase()}.`;
    } else {
      return phrase + 'Nothing!';
    }
  };
  console.log(actuallyReallyGood(['peanut butter']));
  console.log(actuallyReallyGood(['fish Fingers', 'cUstard', 'sENAPE']));
}
{
  const actuallyReallyGood = (foods) => {
    const unique = {};

    for (let i = 0; i < foods.length; i++) unique[foods[i]] = null;
    const uniqueFoods = Object.keys(unique);
    const len = uniqueFoods.length;
    if (len === 0) return phrase + `Nothing!`;
    return (
      phrase +
      capitalize(foods[0]) +
      ' and more ' +
      uniqueFoods[len === 1 ? 0 : 1].toLowerCase() +
      '.'
    );
  };

  console.log(actuallyReallyGood(['peanut butter']));
  console.log(actuallyReallyGood(['fish Fingers', 'cUstard', 'sENAPE']));
}
