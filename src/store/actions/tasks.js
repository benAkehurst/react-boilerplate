import * as actionTypes from './actionTypes';
import axios from '../../axios-instance';

const BASE_URL = 'http://localhost:5000';

export const setTasks = (tasks) => {
  return {
    type: actionTypes.SET_TASKS,
    tasks: tasks,
  };
};

export const fetchTasksFailed = () => {
  return {
    type: actionTypes.FETCH_TASKS_FAILED,
  };
};

export const initFetchTasks = () => {
  let authValid = authCheckState();
  if (authValid)
    return (dispatch) => {
      axios
        .get(`/api/v1/tasks/${authValid.userId}/${authValid.token}`)
        .then((response) => {
          console.log('response: ', response);
          dispatch(setTasks(response.data.data));
        })
        .catch((error) => {
          dispatch(fetchTasksFailed());
        });
    };
};

const authCheckState = () => {
  const token = localStorage.getItem('token');
  let tokenStatus = checkTokenValid(token);
  if (!tokenStatus) {
    return false;
  } else {
    const userId = localStorage.getItem('userId');
    return { token, userId };
  }
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
