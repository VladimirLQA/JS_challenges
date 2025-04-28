/*
  https://www.codewars.com/kata/57d27a0a26427672b900046f/javascript
*/
{
  const calculateHits = (ammo, aim) => Math.floor(ammo * aim);

  const duckShoot = (ammo, aim, ducks, hits = calculateHits(ammo, aim)) =>
    hits === 0
      ? ducks
      : duckShoot(ammo, aim, ducks.replace('2', 'X'), --hits);

  console.log(duckShoot(4, 0.64, '|~~2~~~22~2~~22~2~~~~2~~~|')); // '|~~X~~~X2~2~~22~2~~~~2~~~|'
}
