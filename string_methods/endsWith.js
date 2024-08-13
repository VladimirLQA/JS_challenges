{
  const customEndsWith = (str, searchValue, endPosition = str.length) => {
    let strToCompare = '';
    let searchIndex = searchValue.length - 1;

    for (let i = endPosition - 1; i >= 0 && searchIndex >= 0; i--) {
      strToCompare = str[i] + strToCompare;
      searchIndex--;
    }
    return strToCompare === searchValue;
  };

  console.log(customEndsWith('To be, or not to be,' +
    'that is the question.', 'question.'));
  console.log(customEndsWith('To be, or not to be,' +
    'that is the question.', 'to be', 19));
}
{
  const customEndsWith = (str, searchValue, endPosition = str.length) => {
    let searchIndex = searchValue.length - 1;

    for (let i = endPosition - 1; i >= 0 && searchIndex >= 0; i--) {
      if (str[i] !== searchValue[searchIndex]) {
        return false;
      }
      searchIndex--;
    }
    return searchIndex === -1;
  };

  console.log(customEndsWith('To be, or not to be,' +
    'that is the question.', 'question.'));
  console.log(customEndsWith('To be, or not to be,' +
    'that is the question.', 'to be', 19));
}

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
