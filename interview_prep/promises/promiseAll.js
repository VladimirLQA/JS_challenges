const promiseAll = (promises) => {
  const outputs = [];
  let settledPromiseCount = 0;

  return new Promise((resolve, reject) => {
    promises.forEach((promise, i) => { // with saved order
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

const arrayOfPromisesResolve = [
  Promise.resolve(2),
  Promise.resolve(8),
  Promise.resolve(10),
];
const arrayOfPromisesReject = [
  Promise.resolve(2),
  Promise.resolve(8),
  Promise.reject(10),
];

promiseAll(arrayOfPromisesResolve)
  .then((v) => console.log(v))
  .catch((v) => console.log(v));
promiseAll(arrayOfPromisesReject)
  .then((v) => console.log(v))
  .catch((v) => console.log(v));
