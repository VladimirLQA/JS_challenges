const isContainUpperChar = (str) => /[A-Z]/.test(str) ||
'Upper character is missed';

const isLengthGreaterOrEqual = (str, length) => str.length >= length;
const isLengthEightOrGreater = (str) => isLengthGreaterOrEqual(str, 8) ||
'Value length less than 8 characters long';

const isContainLowerChar = (str) => /[a-z]/.test(str) ||
'Lower character is missed';

const isContainDigitChar = (str) => /[0-9]/.test(str) ||
'Digit character is missed';

const isNotEmpty = (str) => str.trim() !== '' ||
'Value is empty';

const isBooleanAndTrue = (v) => typeof v === 'boolean' && v;
const isString = (v) => typeof v === 'string';

const validatePasswordOptions = [
  isContainUpperChar,
  isLengthEightOrGreater,
  isContainDigitChar,
  isContainLowerChar,
  isNotEmpty,
];

const validate = (str, options) => {
  const failedChecks = options.map((fn) => fn(str));
  return failedChecks.every(isBooleanAndTrue) || failedChecks.filter(isString).join(', ');
};

const validatePassword = (pass) => validate(pass, validatePasswordOptions);

const testCases = [
  'Pasword1',
  'Password1',
  'Pass word1',
  'pasword1',
  'PASWORD1',
  'Password',
  'Passwo1',
  '        ',
];

testCases.forEach((password) => {
  const result = validatePassword(password);
  console.log(`"${password}": ${isBooleanAndTrue(result) ? 'pass' : `fail on: ${result}`}`);
});
