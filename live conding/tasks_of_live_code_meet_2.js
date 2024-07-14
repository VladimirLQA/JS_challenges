/*
 *  В переменной min лежит число от 0 до 59. Определите в какую четверть часа попадает это число
 * (в первую, вторую, третью или четвертую)
 * +усложнение выводить "число {min} находится в 1/2/3/4 четверти"
 * например если в переменной min лежит число 3, то  то программа выводит текст "Первая четверть"
 * 5, 16, 33, 58
 */

function quarter(min) {
  if (typeof min === 'number' && min >= 0 && min <= 59) {
    if (min >= 0 && min <= 14) {
      console.log(`First quarter: ${min}`);
    } else if (min >= 15 && min < 30) {
      console.log(`Second quarter: ${min}`);
    } else if (min >= 30 && min < 45) {
      console.log(`Third quarter: ${min}`);
    } else {
      console.log(`Forth quarter: ${min}`);
    }
  } else {
    console.log(`${min} - is invalid value`);
  }
}
quarter(5);
quarter(16);
quarter(33);
quarter(59);
quarter(-1);
quarter('5df');

// Second option

function hour(min) {
  let part = 1;
  if (min && typeof min === 'number' && min >= 0 && min <= 59) {
    if (min >= 0 && min <= 14) part = 1;
    if (min >= 15 && min <= 29) part = 2;
    if (min >= 30 && min <= 44) part = 3;
    if (min >= 45 && min <= 59) part = 4;
    return `Number ${min} is in ${part} quarter`;
  } else {
    console.error(`${min} - is invalid value`);
  }
}

hour(5);
hour(16);
hour(33);
hour(59);
hour(-1);
hour('5df');

console.log(`================================================`);

/*
 * 2. написать функцию для возведения числа в степень циклом. На вход подаётся число и степень
 * при вводе аргументов функции 3, 4 вывести 3 в 4 степени 81
 * (3, 2), (4, 3), (2, 22)
 */

function pow(a, b) {
  if (b < 0 || typeof b === 'string') console.error('Invalid value');
  if (b === 0) return 1;
  let result = 1;

  for (let i = 1; i <= b; i++) {
    result *= a;
  }
  return console.log(result);
}
pow(5, 6);
pow(3, 2);
pow(2, 22);
pow(5, 'dfd');

console.log(`================================================`);

/*
 * 3. Если переменная a равна нулю или равна двум, то прибавьте к ней 7,
 * иначе поделите ее на 10. Выведите новое значение переменной на экран.
 * +усложжнение принимать на входе дробные числа, на выходе всегда должно
 * быть число с 2 цифрами после запятой
 * если а = 2 то выводим на экран 9(2+7)
 */
function sum(a) {
  if (typeof a === 'string') console.error(`${a} - is a string`);
  return a === 0 || a === 2 ? a + 7 : a / 10;
}

console.log(sum(5));
console.log(sum(0));
console.log(sum(2));
console.log(sum('dfdf'));
