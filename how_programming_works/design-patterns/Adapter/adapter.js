/*
 The assignment is here: implement a cancelable promise by passing
 timeout: number as an option to the promisified function
 (last argument, replacing the callback).
*/

{
//   const promisify = (fn) => (...args) => {
//     const promise = new Promise((resolve, reject) => {
//       const callback = (err, data) => {
//         if (err) reject(err);
//         else resolve(data);
//       };
//       fn(...args, callback);
//     });
//     return promise;
//   };

  const promisify = (fn) => (...args) => {
    const timeout = (typeof args.at(-1) === 'number') && args.pop();

    return new Promise((res, rej) => {
      let timeoutID;
      if (timeout) {
        timeoutID = setTimeout(() => rej(new Error('Time out >>')), timeout);
      }

      const callback = (err, data) => {
        if (timeoutID) clearTimeout(timeoutID);
        err ? rej(err) : res(data);
      };
      fn(...args, callback);
    });
  };

  // Usage

  const fs = require('node:fs');
  const read = promisify(fs.readFile);

  const main = async () => {
    const fileName = '1-promisify.js';
    console.log('dirname', __dirname);
    const data = await read(__dirname + '/' + fileName, 'utf8', 5000);
    console.log(`File "${fileName}" size: ${data.length}`);
  };

  main();

}
