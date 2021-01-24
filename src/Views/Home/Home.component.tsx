import React from 'react';
import './Home.scss';
import Tasks from '../../Components/Tasks/Tasks';

const HomeComponent = () => {
  return (
    <div className="homeWrapper">
      <aside className="pageHeader">
        <h1>Header</h1>
      </aside>
      <aside className="pageContent">
        <Tasks />
      </aside>
    </div>
  );
};

export default HomeComponent;
