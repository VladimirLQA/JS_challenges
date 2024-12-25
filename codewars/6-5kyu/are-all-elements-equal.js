Object.defineProperty(
  String.prototype,
  'eqAll',
  {
    value: function eqAll() {
      return [...this].eqAll();
    // return /^(.)?\1*?/.test(this);
    // return new Set(this).size <= 1;
    },
  });

Object.defineProperty(
  Array.prototype,
  'eqAll',
  {
    value: function eqAll() {
      return this.every((el) => el === this[0]);
    },
  });

{
  function eqAll() { return [...this].every((el) => el === this[0]); }

  Object.defineProperty(
    Object.prototype,
    'eqAll',
    {
      value: eqAll,
    });

  for (const p of [String, Object, Array, Set]) {
    Object.defineProperty(p.prototype, 'eqAll', { value: eqAll });
  }
}
{
  function eqAll() {
    if (!this.length || this.length === 1) return true;

    const [first, ...rest] = this;
    for (const el of rest) {
      if (el !== first) return false;
    }

    return true;
  }
}
