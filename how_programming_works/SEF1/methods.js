// Introspect all properties of iface object and
// extract function names and number of arguments
// For example: {
//   m1: x => [x],
//   m2: function (x, y) {
//     return [x, y];
//   },
//   m3(x, y, z) {
//     return [x, y, z];
//   }
// will return: [
//   ['m1', 1],
//   ['m2', 2],
//   ['m3', 3]
// ]

const toExtract = {
  m1: x => [x],
  m2: function(x, y) {
    return [x, y];
  },
  m3(x, y, z) {
    return [x, y, z];
  },
};

const methods = iface => {
  return Object.entries(iface).map((entry) => {
    const [fName, fArgsQuantity] = entry;
    return [fName, fArgsQuantity.length];
  });
};

console.log(methods(toExtract));
