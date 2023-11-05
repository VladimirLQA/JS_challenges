const reverseStr = (string) => {
  return (string === '') ? '' : reverseStr(string.substring(1)) + string.charAt(0);
};

const pigIt = (str) => {
  return str.split(' ')
    .map((el) => {
      return (/^[a-z0-9]+$/i.test(el)) ? `${el.substring(1)+ el.charAt(0)}ay` : el;
    })
    .join(' ');
};

console.log(pigIt('Pig latin is cool !'));