export const validateEmail = (email: string) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

export const validatePassword = (password: string) => {
  if (password.length <= 6 || password === '') {
    return false;
  }
  return true;
};

export const isPasswordsMatch = (password1: string, password2: string) => {
  if (password1 !== password2) {
    return false;
  } else if (password1 === password2) {
    return true;
  }
};
