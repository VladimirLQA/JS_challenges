/*
 1–5: The first five characters of the surname
 (padded with 9s if less than 5 characters)
 6: The decade digit from the year of birth (e.g. for 1987 it would be 8)
 7–8: The month of birth (7th character incremented by 5
 if driver is female i.e. 51–62 instead of 01–12)
 9–10: The date within the month of birth
 11: The year digit from the year of birth (e.g. for 1987 it would be 7)
 12–13: The first two initials of the first name and
 middle name, padded with a 9 if no middle name
 14: Arbitrary digit – usually 9, but decremented to differentiate
 drivers with the first 13 characters in common. We will always use 9
 15–16: Two computer check digits. We will always use "AA"
*/

{
  const getNameChars = (str) =>
    str.length > 5
      ? str.toUpperCase().slice(0, 5)
      : str.slice(0, 5).toUpperCase().padEnd(5, '9');

  const parseDate = (dateString) => {
    const months = {
      Jan: '01',
      Feb: '02',
      Mar: '03',
      Apr: '04',
      May: '05',
      Jun: '06',
      Jul: '07',
      Aug: '08',
      Sep: '09',
      Oct: '10',
      Nov: '11',
      Dec: '12',
    };

    const [day, monthStr, year] = dateString.split('-');
    return {
      day,
      month: months[monthStr.slice(0, 3)],
      year,
    };
  };

  const getDecade = (year) => Math.floor(year / 10) % 10;

  const getMonth = (month, gender) =>
    gender === 'F' ? month.replace(/^\d/, (e) => +e + 5) : month;

  const getInitials = (forName, middleName) =>
    `${forName[0]}${middleName ? middleName[0] : '9'}`;

  const driver = ([forName, middleName, surName, date, gender]) => {
    const { day, month, year } = parseDate(date);
    return '' + getNameChars(surName) + getDecade(year) +
    getMonth(month, gender) + day + year[year.length - 1] +
    getInitials(forName, middleName) + '9AA';
  };

  console.log(driver(['John', 'James', 'Smith', '01-Jan-2000', 'M'])); // SMITH001010JJ9AA
  console.log(driver(['Johanna', '', 'Gibbs', '13-Dec-1981', 'F'])); //  GIBBS862130J99AA
  console.log(driver(['Andrew', 'Robert', 'Lee', '02-September-1981', 'M'])); // LEE99809021AR9AA
}

{
  const map = { Jan: '01', Feb: '02', Mar: '03',
    Apr: '04', May: '05', Jun: '06', Jul: '07',
    Aug: '08', Sep: '09', Oct: '10', Nov: '11', Dec: '12',
  };

  const driver = ([forName, middleName, surName, date, gender]) => {
    const name = surName.slice(0, 5).toUpperCase().padEnd(5, 9);
    const [day, month, year] = [...date.split('-')];
    let numMonth = map[month.slice(0, 3)];
    if (gender === 'F') numMonth = (+numMonth[0] + 5) + numMonth[1];
    const initials = forName[0] + (middleName[0] || '9');

    return name + year[2] + numMonth +
    day + year[3] + initials + '9AA';
  };
  console.log(driver(['John', 'James', 'Smith', '01-Jan-2000', 'M'])); // SMITH001010JJ9AA
  console.log(driver(['Johanna', '', 'Gibbs', '13-Dec-1981', 'F'])); //  GIBBS862130J99AA
  console.log(driver(['Andrew', 'Robert', 'Lee', '02-September-1981', 'M'])); // LEE99809021AR9AA
}
