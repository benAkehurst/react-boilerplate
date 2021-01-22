import axios from 'axios';
import { validateEmail, validatePassword, isPasswordsMatch } from '../validators/validators';
import { LoginObject, CreateNewAccountObject } from '../../types/index';

const BASE_URL = 'http://localhost:5000';

export const checkUserLoggedIn = () => {
  let tokenExists = localStorage.getItem('token');
  if (!tokenExists) {
    return false
  } else if (!checkTokenValid(tokenExists)) {
    return false
  } else {
    return true;
  }
}

export const checkTokenValid = (token: string) => {
  return axios.get(`${BASE_URL}/api/v1/auth/check-token-valid-external/${token}`)
    .then(response => {
      return response.data.data.success;
    })
    .catch(error => {
      return error.response;
    })
}

export const login = (loginObject: LoginObject) => {
  const loginData = {
    email: loginObject.email,
    password: loginObject.password,
    rememberMe: loginObject.rememberMe
  }
  return axios.post(`${BASE_URL}/api/v1/auth/login-user`, loginData)
    .then(response => {
      localStorage.setItem('token', response.data.data.token);
      localStorage.setItem('uniqueId', response.data.data.uniqueId);
      localStorage.setItem('userFirstName', response.data.data.firstName);

      return true;
    })
    .catch(error => {
      return error.response;
    })
}

export const createNewUser = (newUserObject: CreateNewAccountObject) => {
  if (!validateEmail(newUserObject.email)) {
    return { error: true, msg: 'Email Invalid' };
  }
  if (!validatePassword(newUserObject.password)) {
    return { error: true, msg: 'Password Invalid' }
  }
  if (!isPasswordsMatch(newUserObject.password, newUserObject.password2)) {
    return { error: true, msg: `Passwords don't match` }
  }
  const newAccountData = {
    firstName: newUserObject.firstName,
    email: newUserObject.email,
    password: newUserObject.password,
    password2: newUserObject.password2,
    acceptedTerms: newUserObject.acceptedTerms
  }
  return axios.post(`${BASE_URL}/api/v1/auth/create-new-user`, newAccountData)
    .then(response => {
      localStorage.setItem('token', response.data.data.token);
      localStorage.setItem('uniqueId', response.data.data.uniqueId);
      return response.data.data;
    })
    .catch(error => {
      return error.response;
    })
}

export const logout = () => {
  localStorage.clear();
}
