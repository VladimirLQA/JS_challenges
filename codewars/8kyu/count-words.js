/*
  https://www.codewars.com/kata/570cc83df616a85944001315/javascript
*/
{
  const countWords = (str) => {
    if (typeof str !== 'string' || !str.trim()) return 0;
    const words = str.trim().match(/\b[\w'-]+\b/g);
    return words ? words.length : 0;
  };
  console.log(countWords('No results for search term `s`')); // 6
  console.log(countWords('﻿Hello﻿World ')); // 2
}
{
  const countWords = (str) => str.split(/\s+/).filter(Boolean).length;
  console.log(countWords('No results for search term `s`')); // 6
  console.log(countWords('﻿Hello﻿World ')); // 2
}
{
  const countWords = (str) => (str.match(/[^\s]+/g) || []).length;
  console.log(countWords('No results for search term `s`')); // 6
  console.log(countWords('﻿Hello﻿World ')); // 2
}
