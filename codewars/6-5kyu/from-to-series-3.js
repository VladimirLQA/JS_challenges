/* eslint-disable max-len */
/*
  https://www.codewars.com/kata/5806ea32fb0a18a40a0003ba/javascript
*/

{
  const findSub = (s, a, b, c) => {
    const esc = (char) => char.replace(/([,.()[\]{}])/, '\\$1');  // escape special chars for RegExp
    a = esc(a); b = esc(b); c = esc(c);
    const reg = new RegExp(a + '[^' + a + b + ']*?' + b, 'g'); // /a[^ab]*?b/g
    const reg2 = new RegExp(c, 'g'); // /c/g
    return (s.match(reg) || [])
      .reduce((cur, lon) =>
        (cur.match(reg2) || []).length < (lon.match(reg2) || []).length
          ? lon
          : cur,
      '');
  };

  {
    const s = '0000))0j)))1)1)11)11)))0)00)0oLL)1))1))000Fjc))q))W)1))1111))0)000)0BBB)1)100)))0)00W)DlQ)1)11)1)1)';
    const a = '0', b = '1', c = ')';
    console.log(findSub(s, a, b, c)); // "0Fjc))q))W)1"
  }
  {
    const s = 'abacbaccb', a = 'a', b = 'b', c = 'c';
    console.log(findSub(s, a, b, c)); // "accb"
  }
}
{
  function findSub(s, a, b, c) {
    let result = '';
    let maxCCount = 0;

    for (let i = 0; i < s.length; i++) {
      if (s[i] === a) {
        for (let j = i + 1; j < s.length; j++) {
          if (s[j] === b) {

            const middleString = s.substring(i + 1, j);
            if (middleString.includes(a) || middleString.includes(b)) {
              continue;
            }

            let cCount = 0;
            for (let k = i + 1; k < j; k++) {
              if (s[k] === c) {
                cCount++;
              }
            }

            if (cCount > 0 && cCount > maxCCount) {
              maxCCount = cCount;
              result = s.substring(i, j + 1);
            }

            break;
          }
        }
      }
    }

    return result;
  }
  {
    const s = '0000))0j)))1)1)11)11)))0)00)0oLL)1))1))000Fjc))q))W)1))1111))0)000)0BBB)1)100)))0)00W)DlQ)1)11)1)1)';
    const a = '0', b = '1', c = ')';
    console.log(findSub(s, a, b, c)); // "0Fjc))q))W)1"
  }
  {
    const s = 'abacbaccb', a = 'a', b = 'b', c = 'c';
    console.log(findSub(s, a, b, c)); // "accb"
  }
}
