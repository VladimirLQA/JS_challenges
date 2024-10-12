{
  const date = '2024-10-02';
  const reversedDate = date.replace(/(\d{4})-(\d{2})-(\d{2})/, '$3-$2-$1');
  console.log(reversedDate);
}
{
  const name = 'Doe, John';
  const switchNames = name.replace(/(\w+), (\w+)/, '$2 $1');
  console.log(switchNames);
}
{
  const name = 'Doe, John';
  const switchNames = name.replace(/(\S+)\W+(\S+)/, '$2 $1');
  console.log(switchNames);
}
{
  const complex = 'ABC123XYZ';
  const result = complex.replace(/([A-Z]+)(\d+)([A-Z]+)/, '$3-$2-$1');
  console.log(result);
}
