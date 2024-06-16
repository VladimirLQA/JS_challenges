const testBox = {
  type: 'box',
  id: 'A',
  contents: [
    {
      type: 'box',
      id: 'B',
      contents: [],
    },
    {
      type: 'box',
      id: 'C',
      contents: [
        {
          type: 'box',
          id: 'E',
          contents: [
            {
              type: 'box',
              id: 'G',
              contents: [
                {
                  type: 'key',
                  id: 'Key',
                  contents: [],
                },
              ],
            },
          ],
        },
        {
          type: 'box',
          id: 'F',
          contents: [],
        },
      ],
    },
    {
      type: 'box',
      id: 'D',
      contents: [
        {
          type: 'box',
          id: 'H',
          contents: [],
        },
      ],
    },
  ],
};

const findKeyInBox = (box) => {
  let result = null;
  if (box.contents.length) {
    box.contents.forEach((c) => {
      result = c.type === 'key'
        ? box.id
        : c.type === 'box' && !result
          ? findKeyInBox(c) : result;
    });
  }
  return result;
};

console.log(findKeyInBox(testBox));
