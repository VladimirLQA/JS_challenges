/*
https://www.codewars.com/kata/578b44a47c77f5a1bd000011/javascript
*/
{
  const getLatestNumber = (arr = [], val1, val2) => {
    const firstIdx = arr.lastIndexOf(val1);
    const secondIdx = arr.lastIndexOf(val2);
    return firstIdx > secondIdx ? val1 : val2;
  };

  const getMaxNumberInArray = (arr = []) => {
    const hash = arr.reduce(
      (acc, n) => (acc[n] ? acc[n]++ : (acc[n] = 1), acc),
      {},
    );

    let result = 0;
    let frequency = 0;
    Object.keys(hash).forEach((key) => {
      if (hash[key] > frequency) {
        result = key;
        frequency = hash[key];
      }
      if (hash[key] === frequency) {
        frequency = hash[key];
        result = getLatestNumber(arr, key, result);
      }
    });
    return +result;
  };

  const getMostFrequent = (json) => {
    const { temperature } = json;
    return temperature.map(getMaxNumberInArray);
  };

  const forecast_01 = {
    temperature: [
      [15, 17, 19, 21, 21, 21, 20, 16],
      [16, 17, 22, 22, 22, 22, 20, 16],
      [12, 17, 19, 20, 20, 20, 20, 18],
      [14, 15, 19, 19, 20, 22, 18, 17],
      [15, 17, 24, 24, 24, 20, 20, 20],
    ],
  };

  console.log(getMostFrequent(forecast_01));
}
{
  const getMostFrequent = (json) =>
    json.temperature.map((dayTemps) => {
      const freqMap = new Map();

      dayTemps.forEach((temp) => {
        freqMap.set(temp, (freqMap.get(temp) || 0) + 1);
      });

      let mostFrequent = null;
      let maxFrequency = 0;

      for (let i = dayTemps.length - 1; i >= 0; i--) {
        const temp = dayTemps[i];
        const frequency = freqMap.get(temp);
        if (frequency > maxFrequency) {
          mostFrequent = temp;
          maxFrequency = frequency;
        }
      }

      return mostFrequent;
    });

  const forecast_01 = {
    temperature: [
      [15, 17, 19, 21, 21, 21, 20, 16],
      [16, 17, 22, 22, 22, 22, 20, 16],
      [12, 17, 19, 20, 20, 20, 20, 18],
      [14, 15, 19, 19, 20, 22, 18, 17],
      [15, 17, 24, 24, 24, 20, 20, 20],
    ],
  };

  console.log(getMostFrequent(forecast_01));
}
{
  const getMostFrequent = (json) =>
    json['temperature'].map((arr) =>
      arr
        .sort(
          (a, b) =>
            arr.filter((el) => a === el).length -
            arr.filter((el) => b === el).length,
        )
        .pop(),
    );

  const forecast_01 = {
    temperature: [
      [15, 17, 19, 21, 21, 21, 20, 16],
      [16, 17, 22, 22, 22, 22, 20, 16],
      [12, 17, 19, 20, 20, 20, 20, 18],
      [14, 15, 19, 19, 20, 22, 18, 17],
      [15, 17, 24, 24, 24, 20, 20, 20],
    ],
  };

  console.log(getMostFrequent(forecast_01));
}
