/*
* Coding in function fiveLine, function accept 1 parameter:str. str is a string.
* Please return a string of 5 lines(newline symbol is \n).
* The first line has one s; Second line have two s; and so on..Fifth line have five s;
* Note1: The two sides of the parameter s may contain some whitespace,
* please clear them before using s.
*/


{
  function fiveLine(str: string): string {
    let trimmedString = str.trim();
    let result = "";
    for (let i = 1; i <= 5; i++) {
      for (let j = 0; j < i; j++) {
        result += trimmedString;
      }
      if (i === 5) {
        return result;
      } else {
        result += "\n";
      }
    }
    return result;
  }

  console.log(fiveLine("  a")); // "a\naa\naaa\naaaa\naaaaa"
  console.log(fiveLine("\txy \n")); // "xy\nxyxy\nxyxyxy\nxyxyxyxy\nxyxyxyxyxy"
  console.log(fiveLine("           Ok               ")); // "Ok\nOkOk\nOkOkOk\nOkOkOkOk\nOkOkOkOkOk"
}

console.log(`==============================================`);

{
  function fiveLine(s: string): string {
    s = s.trim();
    // @ts-ignore
    return `${s}\n${s.repeat(2)}\n${s.repeat(3)}\n${s.repeat(4)}\n${s.repeat(5)}`;
  }

  console.log(fiveLine("  a")); // "a\naa\naaa\naaaa\naaaaa"
  console.log(fiveLine("\txy \n")); // "xy\nxyxy\nxyxyxy\nxyxyxyxy\nxyxyxyxyxy"
  console.log(fiveLine("           Ok               ")); // "Ok\nOkOk\nOkOkOk\nOkOkOkOk\nOkOkOkOkOk"
}

console.log(`========================================================`);

{
  function fiveLine(s: string): string {
    // @ts-ignore
    return [1, 2, 3, 4, 5].map(n => s.trim().repeat(n)).join("\n");
  }

  console.log(fiveLine("  a")); // "a\naa\naaa\naaaa\naaaaa"
  console.log(fiveLine("\txy \n")); // "xy\nxyxy\nxyxyxy\nxyxyxyxy\nxyxyxyxyxy"
  console.log(fiveLine("           Ok               ")); // "Ok\nOkOk\nOkOkOk\nOkOkOkOk\nOkOkOkOkOk"
}

{
  // @ts-ignore
  const fiveLine = s => [...Array(5).keys()].map(i => s.trim().repeat(i + 1)).join("\n");

  console.log(fiveLine("  a")); // "a\naa\naaa\naaaa\naaaaa"
  console.log(fiveLine("\txy \n")); // "xy\nxyxy\nxyxyxy\nxyxyxyxy\nxyxyxyxyxy"
  console.log(fiveLine("           Ok               ")); // "Ok\nOkOk\nOkOkOk\nOkOkOkOk\nOkOkOkOkOk"
}
