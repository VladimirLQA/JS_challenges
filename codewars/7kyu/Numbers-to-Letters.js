/*

*/
{
  const switcher = (x) => {
    const a = 'zyxwvutsrqponmlkjihgfedcba!? ';
    return x.map((n) => a[--n]).join('');
  };
  // abcdefghijklmnopqrstuvwxyz

  console.log(switcher(['24', '12', '23', '22', '4', '26', '9', '8'])); // codewars
}
