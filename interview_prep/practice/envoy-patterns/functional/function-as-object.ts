function makeCounter(initial: number = 0) {
  let count = initial;

  return (action: string, value: number = 0): number => {
    switch (action) {
    case 'increment': count += value || 1; break;
    case 'decrement': count -= value || 1; break;
    case 'reset': count = initial; break;
    case 'get': break;
    default: throw new Error('Unknown action');
    }
    return count;
  };
}

// Usage
const counter = makeCounter(10);
console.log(counter('get'));        // 10
console.log(counter('increment'));  // 11
console.log(counter('decrement', 3)); // 8
