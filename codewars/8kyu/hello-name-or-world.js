/*
 Define a method hello that returns "Hello, Name!" to a given name,
 or says Hello, World! if name is not given (or passed as an empty String).

 Assuming that name is a String and it checks for user
 typos to return a name with a first capital letter (Xxxx).
 Examples:
  With `name` = "john"  => return "Hello, John!"
*/

{
  const hello = (name) =>
    `Hello, ${
      name
        ? name.toLowerCase().replace(/^\w/, (val) => val.toUpperCase())
        : `World`
    }!`;

  console.log(hello('johN'));
  console.log(hello('alice'));
  console.log(hello(''));
}
