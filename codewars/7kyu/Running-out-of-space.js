{
  const spacey = (arr) => {
    return arr.reduce((result, current, idx, array) => {
      if (idx === 0) result.push(current);
      else result.push(result[idx - 1] + current);
      return result;
    }, []);
  };

  console.log(spacey(['kevin', 'has', 'no', 'space']));
}

{
  const spacey = (arr, s = '') => arr.map((word) => (s += word));
  console.log(spacey(['kevin', 'has', 'no', 'space']));
}

{
  const spacey = (array) => array.reduce((a, b) => (a.push((a[a.length - 1] || '') + b), a), []);
  console.log(spacey(['kevin', 'has', 'no', 'space']));
}

{
  const spacey = (array) => array.map((_, idx) => array.slice(0, ++idx).join(``));
  console.log(spacey(['kevin', 'has', 'no', 'space']));
}
