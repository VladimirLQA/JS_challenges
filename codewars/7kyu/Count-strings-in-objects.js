/**
 * Create a function strCount (takes an object as argument) that will count all string values inside an object. For example:

strCount({
  first: "1",
  second: "2",
  third: false,
  fourth: ["anytime",2,3,4],
  fifth:  null
  })
  //returns 3
 */
{
  const strCount = (testObj) => {
    return Object.values(testObj).reduce((count, value) => {
      if (typeof value === 'object') count += strCount(value);
      if (typeof value === 'string') count++;
      return count;
    }, 0);
  };

  console.log(
    strCount({
      first: '1',
      second: '2',
      third: false,
      fourth: ['anytime', 2, '3', 4],
      fifth: 'null',
      tr: {
        dream: '32',
      },
    }),
  );
}

{
  const strCount = (data) => {
    let c = 0;
    for (let i in data) {
      if (typeof data[i] === 'object') c += strCount(data[i]);
      if (typeof data[i] === 'string') c += 1;
    }
    return c;
  };
  console.log(
    strCount({
      first: '1',
      second: '2',
      third: false,
      fourth: ['anytime', 2, '3', 4],
      fifth: 'null',
      tr: {
        dream: '32',
      },
    }),
  );
}

{
  const strCount = (obj) =>
    typeof obj !== `string`
      ? Object.values(obj || {}).reduce((pre, val) => pre + strCount(val), 0)
      : 1;

  console.log(
    strCount({
      first: '1',
      second: '2',
      third: false,
      fourth: ['anytime', 2, '3', 4],
      fifth: 'null',
      tr: {
        dream: '32',
      },
    }),
  );
}
