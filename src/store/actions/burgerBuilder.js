import * as actionTypes from './actionTypes';
import axios from '../../axios-instance';

export const addIngredient = (name) => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    ingredientName: name,
  };
};

export const removeIngredient = (name) => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    ingredientName: name,
  };
};

export const setIngredients = (ingredients) => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    ingredients: ingredients,
  };
};

export const setTasks = (tasks) => {
  return {
    type: actionTypes.SET_TASKS,
    tasks: tasks,
  };
};

export const fetchIngredientsFailed = () => {
  return {
    type: actionTypes.FETCH_INGREDIENTS_FAILED,
  };
};

export const fetchTasksFailed = () => {
  return {
    type: actionTypes.FETCH_TASKS_FAILED,
  };
};

export const initFetchTasks = () => {
  return (dispatch) => {
    axios
      .get(`/api/v1/tasks/${'uniqueid'}/${'token'}`)
      .then((response) => {
        dispatch(setTasks(response.data.data));
      })
      .catch((error) => {
        dispatch(fetchTasksFailed());
      });
  };
};

export const initIngredients = () => {
  return (dispatch) => {
    axios
      .get(
        '/api/v1/tasks/b861e610-9f64-414d-ad87-52e612eb20a6/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImI4NjFlNjEwLTlmNjQtNDE0ZC1hZDg3LTUyZTYxMmViMjBhNiIsImlhdCI6MTYxMTA5MzgyNywiZXhwIjoxNjExMjY2NjI3fQ.AGcUAuG54gryELEevL7_flxMWwfQcdyJLsNgKMa51G0'
      )
      .then((response) => {
        dispatch(setIngredients(response.data));
      })
      .catch((error) => {
        dispatch(fetchIngredientsFailed());
      });
  };
};
