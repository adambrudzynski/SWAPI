const fakeLogin = (username: string, password: string) => {
  return new Promise((resolve, reject) => {
    if (username === 'test' && password === 'test') {
      localStorage.setItem('tokens', JSON.stringify(username + password));
      resolve(true);
    } else reject(false);
  });
};

export default fakeLogin;
