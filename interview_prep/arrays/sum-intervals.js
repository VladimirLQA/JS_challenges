const intervals = [
  [1, 2],
  [6, 10],
  [7, 9],
  [11, 15],
];

{
  const sumIntevals = (arr) => {
    arr.sort((a, b) => a[0] - b[0]);

    const merged = [];
    let currInterval = arr[0];

    for (let i = 1; i < arr.length; i++) {
      const [start, end] = arr[i];

      if (currInterval[1] > start) {
        currInterval[1] = Math.max(currInterval[1], end);
      } else {
        merged.push(currInterval);
        currInterval = arr[i];
      }
    }
    merged.push(currInterval);

    return merged.reduce((sum, [start, end]) => sum + (end - start), 0);
  };

  console.log(sumIntevals(intervals)); // => 9
}
{

  const sumIntevals = (arr) => {
    const points = new Set();

    for (const [start, end] of arr) {
      for (let i = start; i < end; i++) {
        points.add(i);
      }
    }

    return points.size;
  };

  console.log(sumIntevals(intervals)); // => 9
}
