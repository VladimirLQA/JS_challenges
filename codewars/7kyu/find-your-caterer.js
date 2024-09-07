/*
 https://www.codewars.com/kata/6402205dca1e64004b22b8de/javascript
*/

{
  const findCaterer = (budget, people) => {
    let basic = 15 * people
    let economy = 20 * people
    let premium = (people > 60 ? 24 : 30) * people
  
    if (people < 1 || budget < basic) {
      return -1
    } else {
      return premium > budget ? economy > budget ? 1 : 2 : 3
    }
  };

  console.log(findCaterer(150, 10)); // 1
  console.log(findCaterer(1500, 60)); // 2
  console.log(findCaterer(1500, 61)); // 3
  console.log(findCaterer(100, 0)); // -1
}
{
  const findCaterer = (
  	budget,
  	people,
  	opts = [15 * people, 20 * people, 30 * people * (people > 60 ? 0.8 : 1)]
  		.map(n => n = n > budget ? 0 : n)
  	) => Math.max(...opts) ? opts.indexOf(Math.max(...opts)) + 1 : -1

  console.log(findCaterer(150, 10)); // 1
  console.log(findCaterer(1500, 60)); // 2
  console.log(findCaterer(1500, 61)); // 3
  console.log(findCaterer(100, 0)); // -1
}