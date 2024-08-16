/*
You have to write a function that accepts three parameters:

 - cap is the amount of people the bus can hold excluding the driver.
 - on is the number of people on the bus excluding the driver.
 - wait is the number of people waiting to get on to the bus excluding the driver.

If there is enough space, return 0, and if there isn't,
return the number of passengers he can't take.
*/

{
  const  enough = (cap, on, wait) => Math.max(wait + on - cap, 0);

  console.log(enough(10, 5, 5)); // 0
  console.log(enough(100, 60, 50)); // 10
}

{
  const  enough = (cap, on, wait) =>
    cap >= on + wait ? 0 : Math.abs(cap - (on + wait));

  console.log(enough(10, 5, 5)); // 0
  console.log(enough(100, 60, 50)); // 10
}
