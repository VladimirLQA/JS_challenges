/*
 Write a function that takes the website date/time
 in its original string format and returns the shortened format.
  Input will always be a string, e.g., "Friday May 2, 7pm".
  Output will be the shortened string, e.g., "Friday May 2".
*/
{
  const shortenToDate = (longDate) => longDate.split(',')[0];

  console.log(shortenToDate('Friday May 2, 7pm'));
}
{
  const shortenToDate = (longDate) => longDate.slice(0, longDate.indexOf(','));

  console.log(shortenToDate('Friday May 2, 7pm'));
}
{
  const shortenToDate = (longDate) => longDate.replace(/, \d\d?[ap]m$/, '');

  console.log(shortenToDate('Friday May 2, 7pm'));
}
