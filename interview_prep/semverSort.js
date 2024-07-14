// Sort array with semver-rules

const arr = [
  '1.0.5',
  '2.5.0',
  '0.12.0',
  '1',
  '1.23.45',
  '1.4.50',
  '1.2.3.4.5.6.7',
];

const semverSor = (array) =>
  array.sort((a, b) => {
    const aParts = a.split('.').map(Number);
    const bParts = b.split('.').map(Number);
    const length = Math.max(aParts.length, bParts.length);

    console.log('length', length);
    console.log('aParts', aParts);
    console.log('bParts', bParts);

    for (let i = 0; i < length; i++) {
      if (aParts[i] > bParts[i]) return 1;
      if (aParts[i] < bParts[i]) return -1;
    }
    return 0;
  });

console.log(semverSor(arr)); // Like [ "0.12.0", "1", "1.0.5", "1.2.3.4.5.6.7", "1.4.50", "1.23.45", "2.5.0"
