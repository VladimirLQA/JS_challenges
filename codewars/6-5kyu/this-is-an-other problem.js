/*

*/

function NamedOne(first, last) {
  this.firstName = first;
  this.lastName = last;

  Object.defineProperty(this, 'fullName', {
    get() {
      return `${_firstName} ${_lastName}`;
    },
    set(value) {
      const parts = value.split(' ');
      if (parts.length === 2) {
        _firstName = parts[0];
        _lastName = parts[1];
      }
    },
  });
}
