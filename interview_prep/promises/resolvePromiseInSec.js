const randomNumber = (n = 7) => Math.floor(Math.random() * n);

const secondsToMilliseconds = (seconds) => seconds * 1000;

const randomPromise = (seconds = 5) =>
  new Promise((res) =>
    setTimeout(
      () => res('Random promise'),
      secondsToMilliseconds(randomNumber(seconds)),
    ));

{
  const resolvePromiseInSec = async (promise, seconds = 12) => {
    const startTime = Date.now();
    const result = await promise;
    const elapsedTime = Date.now() - startTime;
    const remainedTime = secondsToMilliseconds(seconds) - elapsedTime;

    if (remainedTime > 0) {
      await new Promise((res) => setTimeout(res, remainedTime));
    }
    return result;
  };

  (async () => {
    const result = await resolvePromiseInSec(randomPromise());
    console.log(`Результат 1: ${result}`);
  })();
}
{
  const promiseDelay = (seconds) =>
    new Promise((res) => setTimeout(
      res, secondsToMilliseconds(seconds),
    ));

  const resolvePromiseInSec = async (promise, seconds = 12) => {
    const [result] = await Promise.all([promise, promiseDelay(seconds)]);
    return result;
  };

  (async () => {
    const result = await resolvePromiseInSec(randomPromise());
    console.log(`Результат 2: ${result}`);
  })();
}
