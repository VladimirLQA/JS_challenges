{
  const usdcny = (usd) => (usd * 6.75).toFixed(2) + ` Chinese Yuan`;

  console.log(usdcny(15)); // 101.25 Chinese Yuan
  console.log(usdcny(465)); // 3138.75 Chinese Yuan
}
