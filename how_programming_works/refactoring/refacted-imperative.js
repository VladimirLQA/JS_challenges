const fs = require('node:fs');
const path = require('path');

const filePath = path.resolve(__dirname, 'cities.csv');

const loadFile = (filePath) => {
    try {
        const data = fs.readFileSync(filePath, 'utf-8');
        return data;
    } catch (e) {
        console.error('Loading file error \n', e);
    }
};

const parseData = (data) => {
    const lines = data.split('\n');
    lines.shift();

    const cities = [];
    for ( const line of lines) {
        if(line) {
            const cells = line.split(',');
            const [name, population, area, density, country] = cells;
            cities.push({
                name,
                population: parseInt(population),
                area: parseInt(area),
                density: parseInt(density),
                country,
            });
        }
    }
    return cities;
};

// calculate density persantage
const calculateDensity = cities => {
    cities.sort((city1, city2) => city2.density - city1.density);
    const maxDensity = cities[0].density;

    for (const city of cities) {
        city.relative = Math.floor(city.density * 100 / maxDensity);
    }
};

// show data
const showTable = cities => {
    for(const city of cities) {
        const line = (
            city.name.padEnd(18) + 
            city.population.toString().padStart(10) + 
            city.area.toString().padStart(8) + 
            city.density.toString().padStart(8) + 
            city.country.padStart(18) + 
            city.relative.toString().padStart(6)  
       );
       console.log(line);
    }
}


const csvData = loadFile(filePath);

if(csvData) {
    const cities = parseData(csvData);
    calculateDensity(cities);
    showTable(cities);
}
