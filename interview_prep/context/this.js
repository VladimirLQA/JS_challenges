// String.prototype.givePizza = () => 'Pizza';
String.prototype.givePizza = function() {
  return this + ', Pizza';
};

const name = 'Mau';

// console.log(name.givePizza()); // Mau, Pizza

{
  const shape = {
    radius: 10,
    diameter() {
      return this.radius * 2;
    },
    perimeter: () => 2 * Math.PI * this.radius,
  };

  console.log(shape.diameter()); // 20
  console.log(shape.perimeter()); // NaN
}

function diameter() {
  return this.radius * 2;
}

{
  const shape = {
    radius: 10,
    diameter,
    perimeter: () => 2 * Math.PI * this.radius,
  };

  console.log(shape.diameter()); // 20
  console.log(shape.perimeter()); // NaN

  const shape1 = {
    radius: 10,
    diameter: diameter.bind({}),
    perimeter: () => 2 * Math.PI * this.radius,
  };

  console.log(shape1.diameter()); // NaN
  console.log(shape1.perimeter()); // NaN
}

{
  const shape = {
    radius: 10,
    diameter: diameter.bind({}),
    // can't use .bind() for arrow func, under the hood
    // it already uses the bind method
    // so nothing changed
    perimeter: (() => 2 * Math.PI * this.radius).bind(this),
  };

  console.log(shape.diameter()); // NaN
  console.log(shape.perimeter()); // NaN
}
