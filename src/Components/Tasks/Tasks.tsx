import SingleTask from './SingleTask/SingleTask';
import './Tasks.scss';
import NewTask from './NewTask/NewTask';
import { useEffect, useState } from 'react';
import { createNewTask, getAllTasks } from '../../Services/api';
import { Task } from '../../types';

const Tasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    getAllTasks().then((res) => {
      setTasks(res);
    });
  }, [tasks]);

  useEffect(() => {}, [tasks]);

  const addNewTask = (taskString: string) => {
    createNewTask(taskString);
  };

  return (
    <div className="tasksWrapper">
      <aside className="newTaskWrapper">
        <h2>Add New Task</h2>
        <NewTask addTaskHandler={addNewTask} />
      </aside>
      <hr />
      <aside className="currentTasksWrapper">
        <h2>Current Tasks</h2>
        <div className="tasksListed">
          {tasks.map((item) => {
            return <SingleTask {...item} />;
          })}
        </div>
      </aside>
    </div>
  );
};

export default Tasks;
