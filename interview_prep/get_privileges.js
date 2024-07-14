const testData = {
  read: ['fafa@gmail.com', '123@gmail.com', 'wwwwww@gmail.com'],
  write: ['object@gmail.com', 'array@gmail.com', '123@gmail.com'],
};

const getPrivileges = (data, email) => {
  const privileges = [];
  for (const key in data) {
    if (data[key].find((emailWithPrivileges) => emailWithPrivileges === email)) { privileges.push(key); }
    // if(data[key].includes(email)) privileges.push(key);
  }
  return privileges;
};

console.log(getPrivileges(testData, '123@gmail.com'));
