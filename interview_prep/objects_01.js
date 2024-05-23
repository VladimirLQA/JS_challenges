const testObj1 = {
  foo: 'foo',
  bar: 'bar',
};

const testObj2 = {
  bar: 'foo',
  some: 'some',
};

const updateCrossKeyValues = (obj1, obj2) => {
  const result = { ...obj1 };
  for (const key in obj1) {
    if (key in obj2) {
      result[key] = obj2[key];
    }
  }
  return result;
};

console.log(updateCrossKeyValues(testObj1, testObj2));
