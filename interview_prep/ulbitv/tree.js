const tree = {
  value: 1,
  children: [
    {
      value: 2,
      children: [
        { value: 30 },
      ],
    },
    {
      value: 4,
      children: [
        { value: 5 },
        { value: 6 },
      ],
    },
  ],
};

const getTreeValues = (t) => {
  const stack = [t];
  const result = [];

  while (stack.length) {
    const node = stack.pop();
    if (node.value) result.push(node.value);
    if (node.children?.length) { stack.push(...node.children.reverse()); }
  }
  return result;
};

console.log(getTreeValues(tree));

// TODO via recursion

{
  const getTreeValues = (t, result = []) => {
    if (!t) return result;
    result.push(t.value);
    if (t.children?.length) {
      for (const child of t.children.reverse()) {
        getTreeValues(child, result);
      }
    }
    return result;
  };

  console.log(getTreeValues(tree));
}
