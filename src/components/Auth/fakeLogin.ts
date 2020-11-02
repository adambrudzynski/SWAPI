const FAKE_CREDENTIALS = {
  email: 'test@test.test',
  password: 'test',
};

const fakeLogin = (email: string, password: string) => {
  return new Promise((resolve, reject) => {
    if (email === FAKE_CREDENTIALS.email && password === FAKE_CREDENTIALS.password) {
      localStorage.setItem('tokens', JSON.stringify(email + password));
      resolve(true);
    } else reject(false);
  });
};

export default fakeLogin;
