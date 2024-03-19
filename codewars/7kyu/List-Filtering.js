{
  const filter_list = (list) => list.filter((item) => typeof item === 'number');
  console.log(filter_list([1, 2, 'a', 'b']));
  console.log(filter_list([1, 'a', 'b', 0, 15]));
  console.log(filter_list([1, 2, 'aasf', '1', '123', 123]));
}

{
  const filter_list = (list) => list.filter(Number.isInteger);
  console.log(filter_list([1, 2, 'a', 'b']));
  console.log(filter_list([1, 'a', 'b', 0, 15]));
  console.log(filter_list([1, 2, 'aasf', '1', '123', 123]));
}
