/*
 * 3. На вход функция получает одно число n – количество членов последовательности
 * и возвращает перечень членов последовательности Фибоначчи, отделенные символом пробела.
 */

function fib(number) {
  const result = [0, 1];
  if (number && number > 2 && typeof number === 'number') {
    for (let i = 2; i < number; i++) {
      result[i] = result[i - 1] + result[i - 2];
    }
    return result.join(' ');
  } else if (number === 1) {
    return result[number - 1];
  } else if (number === 2) {
    return result.join(' ');
  } else {
    console.error(`${number} - is invalid value`);
  }
}

console.log(fib(1));
console.log(fib(3));
console.log(fib(8));
console.log(fib(21));

console.log(`================================================`);

/*
 * на вход функция получает day и month в виде цифр.
 * Задача возвращать валидная ли это дата (год считать всегда НЕ високосным)
 * +Усложнение - если дата ок - вернуть ее буквенным форматом, при подаче 03.09,
 * возвращается третье сентября
 */

function correctDate(d, m) {
  if (!Number.isInteger(d) || !Number.isInteger(m)) return `Error`;
  const day = {
    1: 'первое',
    2: 'второе',
    3: 'третье',
    4: 'четвертое',
    5: 'пятое',
    6: 'шестое',
    7: 'седьмое',
    8: 'восьмое',
    9: 'девятое',
    10: 'десятое',
    11: 'одинадцатое',
    12: 'двенадцатое',
    13: 'тринадцатое',
    14: 'четырнадцатое',
    15: 'пятнадцатое',
    16: 'шестнадцатое',
    17: 'семнадцатое',
    18: 'восемнадцатое',
    19: 'девятнадстое',
    20: 'двадцатое',
    21: 'двадцать первое',
    22: 'двадцать второе',
    23: 'двадцать третье',
    24: 'двадцать четвертое',
    25: 'двадцать пятое',
    26: 'двадцать шестое',
    27: 'двадцать седьмое',
    28: 'двадцать восьмое',
    29: 'двадцать девятое',
    30: 'тридцатое',
    31: 'тридцать первое',
  };
  const month = {
    1: 'январь',
    2: 'февраль',
    3: 'март',
    4: 'апрель',
    5: 'май',
    6: 'июнь',
    7: 'июль',
    8: 'август',
    9: 'сентябрь',
    10: 'октябрь',
    11: 'ноябрь',
    12: 'декабрь',
  };

  if (
    Object.keys(day).includes(`${d}`) &&
    Object.keys(month).includes(`${m}`)
  ) {
    if (m === 2 && d > 28) return `Error`;
    return `${day[Object.keys(day)
      .filter((el) => el === d)]}
       ${month[Object.keys(month).filter((el) => el === m)]}`;
  }
  return `Error`;
}

console.log(correctDate(1, 5));
console.log(correctDate(15, 12));
console.log(correctDate(29, 2));
console.log(correctDate(32, 7));
