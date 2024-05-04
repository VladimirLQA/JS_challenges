const testTree = {
  value: 6,
  left: {
    value: 5,
    left: {
      value: 3,
      left: {
        value: 1,
      },
    },
    right: {
      value: 7,
    },
  },
  right: {
    value: 10,
    left: {
      value: 4,
    },
    right: {
      value: 5,
    },
  },
};

const recursiveSearch = (tree) => {
  let summ = 0;
  if (tree.value) summ += tree.value;
  if (tree.left) summ += recursiveSearch(tree.left);
  if (tree.right) summ += recursiveSearch(tree.right);
  return summ;
};

console.log(recursiveSearch(testTree)); // 41

// breadth-first search

const bfsSearch = (tree) => {
  let summ = 0;
  const queue = [tree];

  while (queue.length) {
    const node = queue.shift();
    summ += node?.value;

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return summ;
};

console.log(bfsSearch(testTree));
