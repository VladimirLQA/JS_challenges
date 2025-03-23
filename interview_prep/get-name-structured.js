const testObj = {
  'name': 'jsgrill',
  'children': [
    { 'name': 'mentour.js' },
    { 'name': 'community.json' },
    {
      'name': 'images',
      'children': [
        { 'name': 'logo.png' },
        {
          'name': 'codepen',
          'children': [
            { 'name': 'background.svg' },
            { 'name': 'tmbn.png' },
          ],
        },
      ],
    },
    { 'name': 'channel.js' },
  ],
};

{
  function main(obj, lvl = 0) {
    let result = '';
    if (obj?.name) result += ' '.repeat(lvl) + obj.name + '\n';

    if (Array.isArray(obj.children)) {
      obj.children.forEach((child) => result += main(child, lvl + 2));
    }
    return result;
  }

  console.log(main(testObj));
}
{
  function main(obj, lvl = 0) {
    let result = '';
    if (typeof obj !== 'object') {
      result += ' '.repeat(lvl) + obj + '\n';
      return result;
    }

    Object.values(obj).forEach((nestedValue) => {
      if (Array.isArray(nestedValue)) {
        nestedValue.forEach((child) => result += main(child, lvl + 2));
      } else {
        result += main(nestedValue, lvl + 2);
      }
    });

    return result;
  }

  console.log(main(testObj));
}
