/*
* "(){}[]"   =>  True
* "([{}])"   =>  True
* "(}"       =>  False
* "[(])"     =>  False
* "[({})](]" =>  False
*
*/

{
  function validBraces(str) {
    let prev = "";
    while (str.length !== prev.length) {
      prev = str;
      str = str
        .replace("()", "")
        .replace("[]", "")
        .replace("{}", "");
    }
    return (str.length === 0);
  }

  console.log(validBraces("()))")); // false
  console.log(validBraces("(({{[[]]}}))")); // true
}

console.log("-------------");

{
  const braceMap = {
    '(': ')',
    '[': ']',
    '{': '}'
  };

  function validBraces(braces) {
    return !braces.split('').reduce(function (prev, cur) {
      if (cur === braceMap[prev[prev.length - 1]]) {
        prev.pop();
      } else {
        prev.push(cur);
      }
      return prev;
    }, []).length;
  }

  console.log(validBraces("()))")); // false
  console.log(validBraces("(({{[[]]}}))")); // true
}

console.log('--------------');

{
  const validBraces = braces =>
    ![...braces].reduce((pre, val) => (pre + val).replace(/(\(\)|\[]|{})/, ``), ``);

  console.log(validBraces("()))")); // false
  console.log(validBraces("(({{[[]]}}))")); // true
}