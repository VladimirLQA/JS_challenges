/*
  https://www.codewars.com/kata/602afedfd4a64d0008eb4e6e/javascript
*/

{
  const getDay = (day, isLeap) => {
    const options = { month: 'long', day: 'numeric' };
    const year = isLeap ? 2024 : 2023;
    const startOfYear = new Date(year, 0, day);
    return startOfYear.toLocaleDateString('en-US', options).replace(' ', ', ');
  };

  console.log(getDay(41, false));
  console.log(getDay(15, false));
  console.log(getDay(365, false));
  console.log(getDay(366, true));
}
{

  const getDay = (day, isLeap) =>
    (day = new Date(isLeap ? 2024 : 2023, 0, day)) &&
    `${(day.toLocaleDateString('english', { month: 'long' }))}, ${day.getDate()}`;

  console.log(getDay(41, false));
  console.log(getDay(15, false));
  console.log(getDay(365, false));
  console.log(getDay(366, true));
}
