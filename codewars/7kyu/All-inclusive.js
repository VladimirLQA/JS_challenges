{
  const moveLastCharToStart = (str, i) => str.slice(-i) + str.slice(0, -i);

  const getAllPossibleStringRotations = (str) =>
    Array.from({ length: str.length }, (_, i) => moveLastCharToStart(str, i));

  const containAllRots = (str, arr) =>
    !str.trim() ||
    getAllPossibleStringRotations(str).every((w) => arr.includes(w));

  console.log(containAllRots('', [])); // true
  console.log(
    containAllRots('bsjq', ['bsjq', 'qbsj', 'sjqb', 'twZNsslC', 'jqbs']),
  ); // true
  console.log(
    containAllRots('XjYABhR', [
      'TzYxlgfnhf',
      'yqVAuoLjMLy',
      'BhRXjYA',
      'YABhRXj',
      'hRXjYAB',
      'jYABhRX',
      'XjYABhR',
      'ABhRXjY',
    ]),
  ); // false
}
{
  const containAllRots = (str, arr) =>
    !str.trim() ||
    [...str]
      .map((_, i) => str.substring(i) + str.slice(0, i))
      .every((w) => arr.includes(w));

  console.log(containAllRots('', [])); // true
  console.log(
    containAllRots('bsjq', ['bsjq', 'qbsj', 'sjqb', 'twZNsslC', 'jqbs']),
  ); // true
  console.log(
    containAllRots('XjYABhR', [
      'TzYxlgfnhf',
      'yqVAuoLjMLy',
      'BhRXjYA',
      'YABhRXj',
      'hRXjYAB',
      'jYABhRX',
      'XjYABhR',
      'ABhRXjY',
    ]),
  ); // false
}
