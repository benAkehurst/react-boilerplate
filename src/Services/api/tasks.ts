import axios from 'axios';
import { Task } from '../../types';
const BASE_URL = 'http://localhost:5000';

export const getAllTasks = () => {
  const uniqueId = localStorage.getItem('uniqueId');
  const token = localStorage.getItem('token');
  return axios.get(`${BASE_URL}/api/v1/tasks/${uniqueId}/${token}`)
    .then(response => {
      if (!response || response === undefined) {
        return { message: 'Server Error - Failed to Connect' }
      }
      return response.data.data;
    })
    .catch(error => {
      return error.response;
    })
}

export const createNewTask = (task: string) => {
  const uniqueId = localStorage.getItem('uniqueId');
  const token = localStorage.getItem('token');
  const taskData: Task = {
    task,
    completed: false,
  }
  return axios.post(`${BASE_URL}/api/v1/tasks/create-new-task/${uniqueId}/${token}`, taskData)
    .then(response => {
      return response.data.data;
    })
    .catch(error => {
      return error.response;
    })
}

export const getSingleTask = (taskData: Task) => {
  const uniqueId = localStorage.getItem('uniqueId');
  const token = localStorage.getItem('token');
  return axios.get(`${BASE_URL}/api/v1/tasks/${uniqueId}/${token}/${taskData.externalId}`)
    .then(response => {
      return response.data.data;
    })
    .catch(error => {
      return error.response;
    })
}

export const updateSingleTask = (taskData: Task) => {
  const uniqueId = localStorage.getItem('uniqueId');
  const token = localStorage.getItem('token');
  const updatedTaskData: Task = {
    task: taskData.task,
    completed: taskData.completed
  }
  return axios.put(`${BASE_URL}/api/v1/tasks/${uniqueId}/${token}/${taskData.externalId}`, updatedTaskData)
    .then(response => {
      return response.data.data;
    })
    .catch(error => {
      return error.response;
    })
}

export const deleteSingleTask = (externalId: string) => {
  const uniqueId = localStorage.getItem('uniqueId');
  const token = localStorage.getItem('token');
  return axios.delete(`${BASE_URL}/api/v1/tasks/${uniqueId}/${token}/${externalId}`)
    .then(response => {
      return response.data.data;
    })
    .catch(error => {
      return error.response;
    })
}

