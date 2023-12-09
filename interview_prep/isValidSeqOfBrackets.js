const isValidSeqOfBrackets = (str) => {
  const stack = [];
  const mapper = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  for (let i = 0; i < str.length; i++) {
    const currentChar = str[i];
    // isClosedBracket(currentChar)
    if ([')', '}', ']'].includes(currentChar)) {
      if (mapper[currentChar] !== stack.pop()) return false;
    } else {
      stack.push(currentChar);
    }
  }
  return !stack.length;
};

const isClosedBracket = (char) => [')', '}', ']'].indexOf(char) > -1;

const s1 = '()';
const s2 = '()[]{}';
const s3 = '(]';
const s4 = '{[]}';
const s5 = '([)]';

console.log(s1, isValidSeqOfBrackets(s1));
console.log(s2, isValidSeqOfBrackets(s2));
console.log(s3, isValidSeqOfBrackets(s3));
console.log(s4, isValidSeqOfBrackets(s4));
console.log(s5, isValidSeqOfBrackets(s5));
