{
  const customEndsWith = (str, searchValue, endPosition) => {
    let slicedStr = '';
    if (endPosition) {
      slicedStr += str.slice(0, endPosition).slice(-searchValue.length);
    } else {
      slicedStr = str.slice(-searchValue.length);
    }
    return slicedStr === searchValue;
  };

  console.log(customEndsWith('To be, or not to be,' +
    'that is the question.', 'question.'));
  console.log(customEndsWith('To be, or not to be,' +
    'that is the question.', 'to be', 19));
}

{
  const customEndsWith = (str, searchValue, endPosition = str.length) =>
    str.slice(endPosition - searchValue.length, endPosition) === searchValue;

  console.log(customEndsWith('To be, or not to be,' +
    'that is the question.', 'question.'));
  console.log(customEndsWith('To be, or not to be,' +
    'that is the question.', 'to be', 19));
}
