import SingleTask from './SingleTask/SingleTask';
import { TaskProps } from '../../types';
import './Tasks.scss';

const Tasks = (props: TaskProps) => {
  return (
    <div className="tasksWrapper">
      <h1>Tasks</h1>
      <div className="tasksListed">
        {props.tasks.map((item) => {
          return <SingleTask {...item} />;
        })}
      </div>
    </div>
  );
};

export default Tasks;
