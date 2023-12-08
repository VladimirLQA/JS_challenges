const cities = [
    {city: 'Kyiv', population: 6_000_000},
    {city: 'Toky', population: 13_000_000},
    {city: 'New Your', population: 22_000_000},
    {city: 'London', population: 17_000_000},
];

const findCityWithBiggerPopulation = (pop_min, pop_max) => 
    cities
    .filter((city) => city.population > pop_min && city.population < pop_max)
    .map(city => city.city);


console.log(findCityWithBiggerPopulation(15_000_000, 20_000_000));