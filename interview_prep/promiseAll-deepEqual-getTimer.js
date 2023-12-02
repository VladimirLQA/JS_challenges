const promiseAll = (promises) => {
  const outputs = [];
  let settledPromiseCount = 0;

  return new Promise((resolve, reject) => {
    promises.forEach((promise, i) => {
      promise
        .then((value) => {
          outputs[i] = value;
          settledPromiseCount++;

          if (settledPromiseCount === promises.length) {
            resolve(outputs);
          }
        })
        .catch(reject);
    });
  });
};

const arrayOfPromisesResolve = [Promise.resolve(2), Promise.resolve(8), Promise.resolve(10)];
const arrayOfPromisesReject = [Promise.resolve(2), Promise.resolve(8), Promise.reject(10)];

promiseAll(arrayOfPromisesResolve).then(v => console.log(v)).catch(v => console.log(v));
promiseAll(arrayOfPromisesReject).then(v => console.log(v)).catch(v => console.log(v));


const deepEqual = (valueOne, valueTwo) => {
    if (typeof valueOne !== 'object' && typeof valueTwo !== 'object') {
        const isValueOneNaN = isNaN(valueOne) && typeof valueOne === 'number';
        const isValueTwoNaN = isNaN(valueTwo) && typeof valueTwo === 'number';

        if (isValueOneNaN && isValueTwoNaN) return true;
        return valueOne === valueTwo;
    }

    if (typeof valueOne !== typeof valueTwo) return false;

    if (valueOne === null && valueTwo === null) return true;
    if (valueOne === null || valueTwo === null) return false;
    if(valueOne === valueTwo) return true;

    if (Array.isArray(valueOne) && Array.isArray(valueOne)) {
        if (valueOne.length !== valueTwo.length) return false;
for (let i = 0; i < valueOne.length; i++) {
            if (!deepEqual(valueOne[i], valueTwo[i])) return false;
        }
        return true;
    }

    if(Array.isArray(valueOne) && Array.isArray(valueTwo)) return false;

    const objOneKeys = Object.keys(valueOne);
    const objTwoKeys = Object.keys(valueTwo);
    if(!deepEqual(objOneKeys, objTwoKeys)) return false;

    if (objOneKeys.length !== objTwoKeys.length) return false;

    for (let i = 0; i < objOneKeys.length; i++) {
        const key = objOneKeys[i];
        if (!deepEqual(valueOne[key], valueTwo[key])) return false;
    }

    return true;
};

console.log('Primitives: \n');
console.log(deepEqual(1, 1));
console.log(deepEqual('a', 'a'));
console.log(deepEqual(NaN, NaN));
console.log(deepEqual(null, null));
console.log(deepEqual(undefined, undefined));

console.log('\nFalse');
console.log(deepEqual(1, 2));
console.log(deepEqual('b', 'a'));
console.log(deepEqual(NaN, 10));
console.log(deepEqual(null, 1));
console.log(deepEqual(undefined, 'a'));


console.log('\nArray & Objects: \n');
console.log(deepEqual([], []));
console.log(deepEqual([1], [1]));
console.log(deepEqual(['al'], ['al']));
console.log(deepEqual([[1, 2], [3, 4]], [[1, 2], [3, 4]]));
console.log(deepEqual({a: 1}, {a: 1}));
console.log(deepEqual({a: "a", obj: {b: 4}}, {a: "a", obj: {b: 4}}));
const arr = new Array(1000).fill('a');
console.log(deepEqual(arr, arr));

console.log('\nFalse');
console.log(deepEqual([], [1]));
console.log(deepEqual([1], [2]));
console.log(deepEqual(['a'], ['al']));
console.log(deepEqual([[1, 2], [3, 4]], [[2, 2], [3, 4]]));
console.log(deepEqual({a: 22}, {a: 1}));
console.log(deepEqual({a: "a", obj: {b: 22}}, {a: "a", obj: {b: 4}}));



const updateTimer = (isoDate, timerInfo) => {
    const date = new Date(isoDate);

    const timeTillDate = date - Date.now();

    const seconds = Math.floor(timeTillDate / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    timerInfo.seconds = seconds % 60;
    timerInfo.minutes = minutes % 60;
    timerInfo.hours = hours;
};

const timerInfo = {hours: 0, minutes: 0, seconds: 0}
updateTimer("2023-12-03T01:30:00.000-05:00", timerInfo);
console.log(timerInfo);

