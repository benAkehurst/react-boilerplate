import React, { useState } from 'react';

import Home from './Home.component';

const HomeContainer = () => {
  const token = localStorage.getItem('token') || '';
  const uniqueId = localStorage.getItem('uniqueId') || '';
  const userFirstName = localStorage.getItem('userFirstName') || '';
  const [isError, setIsError] = useState(false);
  const [isErrorMessage, setIsErrorMessage] = useState('');

  return <Home />;
};

export default HomeContainer;
