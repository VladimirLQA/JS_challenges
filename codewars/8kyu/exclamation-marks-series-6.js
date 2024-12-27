/*
  Remove n exclamation marks in the sentence from left to right. n is positive integer.
*/
{
  const remove = (s, n) => {
    while (n) {
      s = s.replace('!', '');
      n--;
    }
    return s;
  };

  console.log(remove('Hi!', 1)); // === "Hi"
  console.log(remove('!!!Hi !!hi!!! !hi', 3)); // === "Hi !!hi!!! !hi"
}
{
  const remove = (s, n) => n > 0 ? remove(s.replace('!', ''), n - 1) : s;

  console.log(remove('Hi!', 1)); // === "Hi"
  console.log(remove('!!!Hi !!hi!!! !hi', 3)); // === "Hi !!hi!!! !hi"
}
{
  const remove = (s, n) => s.replace(/!/g, (char) => n-- > 0 ? '' : char);

  console.log(remove('Hi!', 1)); // === "Hi"
  console.log(remove('!!!Hi !!hi!!! !hi', 3)); // === "Hi !!hi!!! !hi"
}
