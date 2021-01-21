import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Aux from '../../hoc/Aux/Aux';
import Tasks from '../../components/Tasks/Tasks';
import Modal from '../../components/UI/Modal/Modal';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';
import axios from '../../axios-instance';

const Home = (props) => {
  const dispatch = useDispatch();
  const tasks = [{ taskString: 'aaa' }];
  const error = false;

  // const tasks = useSelector((state) => {
  //   return state.home.tasks;
  // });
  // const error = useSelector((state) => state.home.error);
  // // const isAuthenticated = useSelector((state) => state.auth.token !== null);
  // const onInitFetchTasks = useCallback(
  //   () => dispatch(actions.initFetchTasks()),
  //   [dispatch]
  // );
  // // const onSetAuthRedirectPath = (path) =>
  // //   dispatch(actions.setAuthRedirectPath(path));

  // useEffect(() => {
  //   onInitFetchTasks();
  // }, [onInitFetchTasks]);

  let taskList = error ? <p>Tasks can't be loaded!</p> : <Spinner />;

  if (tasks) {
    console.log(tasks);
    taskList = (
      <Aux>
        <h1>Home</h1>
        <Tasks tasks={tasks} />
      </Aux>
    );
  }
  return <Aux>{taskList}</Aux>;
};

export default withErrorHandler(Home, axios);
