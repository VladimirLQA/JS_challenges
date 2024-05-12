const START = Date.now();

function someFn() {
  console.log('time', Date.now() - START);
  // eslint-disable-next-line prefer-rest-params
  console.log('args', arguments);
}

Function.prototype.delay = function(ms) {
  return (...args) => {
    setTimeout(() => {
      this.apply(this, args);
    }, ms);
  };
};

const f = someFn.delay(3000);

f('arg1', 'arg2', 1, 2);
