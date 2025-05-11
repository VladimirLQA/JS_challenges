const userFromSystemA = {
  user_id: 1,
  user_name: 'Alice',
  created_at: '2023-01-01',
  is_active: true,
  email_address: 'alice@example.com',
  phone_number: '+123456789',
  last_login: '2023-05-10T10:00:00Z',
};

const mapper = {
  toSystemB: {
    user_id: 'id',
    user_name: 'name',
    created_at: 'created',
    is_active: 'active',
    email_address: 'email',
    phone_number: 'phone',
    last_login: 'lastSeen',
  },
};

const mapUser = (from, to) => {
  const result = {};
  const systemToMap = mapper[to];
  for (const key in from) {
    result[systemToMap[key]] = from[key];
  }
  return result;
};

console.log(mapUser(userFromSystemA, 'toSystemB'));
