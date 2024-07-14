const fs = require('fs');

const csvData = fs.readFileSync('./username.csv', 'utf-8');

{
  const getParsedCSV = (data) => {
    const parsedData = [];

    const [headers, ...values] = data.split('\n');
    const properties = headers.split(';').map((header) => header.trim());

    for (let i = 0; i < values.length; i++) {
      const splittedValues = values[i].split(';').map((val) => val.trim());

      const parsedEntity = {};
      for (let j = 0; j < properties.length; j++) {
        parsedEntity[properties[j]] = splittedValues[j];
      }

      parsedData.push(parsedEntity);
    }
    return parsedData;
  };

  console.log(getParsedCSV(csvData));
}

{
  const getParsedCSV = (data) => {
    const [header, ...valueLines] = data.split('\n');
    const properties = header.split(';').map((column) => column.trim());

    return valueLines.reduce((acc, line) => {
      const values = line.split(';').map((val) => val.trim());

      const parsedEntity = properties.reduce((entity, property, idx) => {
        entity[property] = values[idx];
        return entity;
      }, {});

      acc.push(parsedEntity);
      return acc;
    }, []);
  };

  //   console.log(getParsedCSV(csvData));
}

{
  const getParsedCSV = (data) => {
    const [header, ...valueLines] = data.split('\n');
    const properties = header.split(';').map((column) => column.trim());

    const parsedData = [];

    valueLines.forEach((line) => {
      const values = line.split(';').map((val) => val.trim());

      const entity = {};
      properties.forEach((property, idx) => {
        entity[property] = values[idx];
      });

      parsedData.push(entity);
    });

    return parsedData;
  };

  //   console.log(getParsedCSV(csvData));
}
