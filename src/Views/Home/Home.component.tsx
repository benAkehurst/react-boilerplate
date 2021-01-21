import React from 'react';
import './Home.scss';
import { HomeProps } from '../../types';
import Tasks from '../../Components/Tasks/Tasks';

const HomeComponent = (props: HomeProps) => {
  return (
    <div className="homeWrapper">
      <h1>Home</h1>
      <Tasks {...props} />
    </div>
  );
};

export default HomeComponent;
