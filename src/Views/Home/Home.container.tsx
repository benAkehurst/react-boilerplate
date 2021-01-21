import React, { useEffect, useState } from 'react';
import { getAllTasks } from '../../Services/api';
import { HomeProps } from '../../types/index';

import Home from './Home.component';

const HomeContainer = () => {
  const token = localStorage.getItem('token') || '';
  const uniqueId = localStorage.getItem('uniqueId') || '';
  const userFirstName = localStorage.getItem('userFirstName') || '';
  const [allTasks, setAllTasks] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isErrorMessage, setIsErrorMessage] = useState('');

  useEffect(() => {
    getAllTasks({ token, uniqueId })
      .then((res) => {
        setAllTasks(res);
      })
      .catch((err) => {
        setIsError(true);
        setIsErrorMessage(err.message);
      });
  }, []);

  const homeProps: HomeProps = {
    tasks: allTasks,
  };

  return <Home {...homeProps} />;
};

export default HomeContainer;
