import axios from 'axios';
import { AuthUserDetails, Task } from '../../types/index';

const BASE_URL = 'http://localhost:5000';

export const getAllTasks = (authUserDetails: AuthUserDetails) => {
  return axios.get(`${BASE_URL}/api/v1/tasks/${authUserDetails.uniqueId}/${authUserDetails.token}`)
    .then(response => {
      return response.data.data;
    })
    .catch(error => {
      return error.response;
    })
}

export const createNewTask = (authUserDetails: AuthUserDetails, newTask: Task) => {
  const taskData: Task = {
    task: newTask.task,
    completed: false,
  }
  return axios.post(`${BASE_URL}/api/v1/tasks/create-new-task/${authUserDetails.uniqueId}/${authUserDetails.token}`, taskData)
    .then(response => {
      return response.data.data;
    })
    .catch(error => {
      return error.response;
    })
}

export const getSingleTask = (authUserDetails: AuthUserDetails, taskData: Task) => {
  return axios.get(`${BASE_URL}/api/v1/tasks/${authUserDetails.uniqueId}/${authUserDetails.token}/${taskData.externalId}`)
    .then(response => {
      return response.data.data;
    })
    .catch(error => {
      return error.response;
    })
}

export const updateSingleTask = (authUserDetails: AuthUserDetails, taskData: Task) => {
  const updatedTaskData: Task = {
    task: taskData.task,
    completed: taskData.completed
  }
  return axios.put(`${BASE_URL}/api/v1/tasks/${authUserDetails.uniqueId}/${authUserDetails.token}/${taskData.externalId}`, updatedTaskData)
    .then(response => {
      return response.data.data;
    })
    .catch(error => {
      return error.response;
    })
}

export const deleteSingleTask = (authUserDetails: AuthUserDetails, taskData: Task) => {
  return axios.delete(`${BASE_URL}/api/v1/tasks/${authUserDetails.uniqueId}/${authUserDetails.token}/${taskData.externalId}`)
    .then(response => {
      return response.data.data;
    })
    .catch(error => {
      return error.response;
    })
}

