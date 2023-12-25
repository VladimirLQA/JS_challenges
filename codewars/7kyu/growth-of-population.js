/**
 * More generally given parameters:
 * p0, percent, aug (inhabitants coming or leaving each year), p (population to equal or surpass)
 * the function nb_year should return n number of entire years needed to get a population greater or equal to p.
 * aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)
 * Examples:
 * nb_year(1500, 5, 100, 5000) -> 15
 * nb_year(1500000, 2.5, 10000, 2000000) -> 10
 */

{
  const nbYear = (p0, percent, aug, p) => {
    let years = 0;
    while (p0 < p) {
      p0 += Math.floor((p0 * percent) / 100) + aug;
      years++;
    }
    return years;
  };
  console.log(nbYear(1500, 5, 100, 5000)); // 15
  console.log(nbYear(1500000, 2.5, 10000, 2000000)); // 10
}
console.log('<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>');
{
  const nbYear = (p0, percent, aug, p, years = 0) => {
    if (p0 < p) {
      return nbYear((p0 += Math.floor((p0 * percent) / 100) + aug), percent, aug, p, ++years);
    }
    return years;
  };
  console.log(nbYear(1500, 5, 100, 5000)); // 15
  console.log(nbYear(1500000, 2.5, 10000, 2000000)); // 10
}
