{
  String.prototype.isUpperCase = function() {
    return this === this.toUpperCase();
  };
}
{
  String.prototype.isUpperCase = function() {
    return !/[a-z]/.test(this);
  };
}
{
  String.prototype.isUpperCase = function() {
    if (!this.length) return false;
    return [...this].every((char) => char === char.toUpperCase());
  };
}
