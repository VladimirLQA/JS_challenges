const cities = [
  { city: 'Kyiv', population: 6_000_000 },
  { city: 'Toky', population: 13_000_000 },
  { city: 'New Your', population: 22_000_000 },
  { city: 'London', population: 17_000_000 },
];

const findCityWithBiggerPopulation = (popMin, popMax) =>
  cities
    .filter((city) => city.population > popMin && city.population < popMax)
    .map((city) => city.city);

console.log(findCityWithBiggerPopulation(15_000_000, 20_000_000));
