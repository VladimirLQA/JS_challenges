const promiseRace = (promises) => {
  if (promises.length === 0) {
    return Promise.resolve();
  }

  return new Promise((resolve, reject) => {
    promises.forEach((p) => {
      Promise.resolve(p).then(resolve).catch(reject);
    });
  });
};
const p1 = new Promise((resolve) => setTimeout(() => resolve('p1'), 100));
const p2 = new Promise((resolve) => setTimeout(() => resolve('p2'), 50));
const p3 = new Promise((_, reject) => setTimeout(() => reject('p3 error'), 20));

(async () => {
  try {
    const result = await promiseRace([p1, p2, p3]);
    console.log('Try results >>>>>', result);
  } catch (e) {
    console.log('Catch error >>>>', e);
  }
})();
