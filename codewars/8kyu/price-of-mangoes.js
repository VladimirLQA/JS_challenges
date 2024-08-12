{
  const mango = (q, p) => p * (q - Math.floor(q / 3));

  console.log(mango(3, 3)); // 6
  console.log(mango(9, 5)); // 30
}
{
  const mango = (q, p) => {
    const sets = Math.floor(q / 3);
    const remaining = q % 3;
    return p * (sets * 2 + remaining);
  };

  console.log(mango(3, 3)); // 6
  console.log(mango(9, 5)); // 30
}
