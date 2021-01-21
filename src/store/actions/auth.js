import axios from 'axios';
import * as actionTypes from './actionTypes';

const BASE_URL = 'http://localhost:5000';

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess = (token, userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: token,
    userId: userId,
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
  };
};

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('userId');
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};

export const auth = (email, password, password2, isSignup) => {
  return (dispatch) => {
    dispatch(authStart());
    const loginData = {
      email: email,
      password: password,
    };
    const signUpData = {
      email: email,
      password: password,
      password2: password2,
      acceptedTerms: true,
    };
    let url = !isSignup
      ? `${BASE_URL}/api/v1/auth/login-user`
      : `${BASE_URL}/api/v1/auth/create-new-user`;
    axios
      .post(url, !isSignup ? loginData : signUpData)
      .then((response) => {
        localStorage.setItem('token', response.data.data.token);
        localStorage.setItem('userId', response.data.data.uniqueId);
        dispatch(
          authSuccess(response.data.data.uniqueId, response.data.data.token)
        );
      })
      .catch((error) => {
        dispatch(authFail(error.response.data.message));
      });
  };
};

export const setAuthRedirectPath = (path) => {
  return {
    type: actionTypes.SET_AUTH_REDIRECT_PATH,
    path: path,
  };
};

export const authCheckState = () => {
  return (dispatch) => {
    const token = localStorage.getItem('token');
    let tokenStatus = checkTokenValid(token);
    if (!tokenStatus) {
      dispatch(logout());
    } else {
      const userId = localStorage.getItem('userId');
      dispatch(authSuccess(token, userId));
    }
  };
};

const checkTokenValid = (token) => {
  if (!token) {
    return false;
  } else {
    const tokenValid = axios.get(
      `${BASE_URL}api/v1/auth/check-token-valid-external/${token}`
    );
    if (!tokenValid) {
      return false;
    } else {
      return true;
    }
  }
};
