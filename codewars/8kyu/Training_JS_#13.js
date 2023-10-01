/*
 * To judge the number n. If n is one of the above five constants, return one of these string:
 * "Input number is Number.MAX_VALUE"
 * "Input number is Number.MIN_VALUE"
 * "Input number is Number.NaN"
 * "Input number is Number.NEGATIVE_INFINITY"
 * "Input number is Number.POSITIVE_INFINITY"
 * Other values should return "Input number is xxx". xxx means this number.
 * For example:
 * whatNumberIsIt(1/0) should return "Input number is Number.POSITIVE_INFINITY"
 * whatNumberIsIt(100) should return "Input number is 100"*/

{
  function whatNumberIsIt(n) {
    switch (n) {
      case Number.MAX_VALUE:
        return console.log("Input number is Number.MAX_VALUE");
      case Number.MIN_VALUE:
        return console.log("Input number is Number.MIN_VALUE");
      case Number.POSITIVE_INFINITY:
        return console.log("Input number is Number.POSITIVE_INFINITY");
      case Number.NEGATIVE_INFINITY:
        return console.log("Input number is Number.NEGATIVE_INFINITY");
      case Number(n):
        return console.log("Input number is " + n);
      default:
        return console.log("Input number is Number.NaN");
    }
  }

  whatNumberIsIt(-Number.MAX_VALUE * 2);
  whatNumberIsIt(1.7976931348623157e308);
  whatNumberIsIt(5e-324);
  whatNumberIsIt(NaN);
  whatNumberIsIt(100);
}

console.log(`======================================================`);

{
  const whatNumberIsIt = (n) =>
    console.log(
      `Input number is ${
        Number.isNaN(n)
          ? `Number.NaN`
          : n === Number.MAX_VALUE
          ? `Number.MAX_VALUE`
          : n === Number.MIN_VALUE
          ? `Number.MIN_VALUE`
          : n === Infinity
          ? `Number.POSITIVE_INFINITY`
          : n === -Infinity
          ? `Number.NEGATIVE_INFINITY`
          : n
      }`,
    );

  whatNumberIsIt(-Number.MAX_VALUE * 2);
  whatNumberIsIt(1.7976931348623157e308);
  whatNumberIsIt(5e-324);
  whatNumberIsIt(NaN);
  whatNumberIsIt(100);
}

console.log(`======================================================`);

{
  whatNumberIsIt = (n) => {
    let str = Object.getOwnPropertyNames(Number) // return array with property names
      .slice(1) // exclude 1st property (Number.length)
      .find((i) => Object.is(Number[i], n)); // return numeric constant name or undefined
    str = str ? "Number." + str : n; // assign str special value or ordinary number
    return console.log(`Input number is ${str}`);
  };

  whatNumberIsIt(-Number.MAX_VALUE * 2);
  whatNumberIsIt(1.7976931348623157e308);
  whatNumberIsIt(5e-324);
  whatNumberIsIt(NaN);
  whatNumberIsIt(100);
}
