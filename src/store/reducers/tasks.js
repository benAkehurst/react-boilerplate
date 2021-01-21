import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  tasks: [],
};

const addTask = (state, action) => {
  const newTask = { [action.taskString]: state.tasks };
  const updatedTasks = updateObject(state.tasks, newTask);
  const updatedState = {
    tasks: updatedTasks,
  };
  return updateObject(state, updatedState);
};
const removeTask = (state, action) => {};

const setTasks = (state, action) => {
  return updateObject(state, {
    tasks: {},
    error: false,
  });
};
const fetchTasks = (state, action) => {};
const fetchTasksFailed = (state, action) => {
  return updateObject(state, { error: true });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TASK:
      return addTask(state, action);
    case actionTypes.REMOVE_TASK:
      return removeTask(state, action);
    case actionTypes.SET_TASKS:
      return setTasks(state, action);
    case actionTypes.FETCH_TASKS:
      return fetchTasks(state, action);
    case actionTypes.FETCH_TASKS_FAILED:
      return fetchTasksFailed(state, action);
    default:
      return state;
  }
};

export default reducer;
