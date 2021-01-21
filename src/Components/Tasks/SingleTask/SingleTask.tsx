import { Task } from '../../../types';
import './SingleTask.scss';

const SingleTask = (task: Task) => {
  console.log('task: ', task);
  return (
    <div className="singleTaskWrapper" key={task.externalId}>
      <section className="singleTaskTask">{task.task}</section>
      <section className="singleTaskCompleted">
        <input type="checkbox" checked={task.completed} readOnly />
      </section>
      <section className="singleTaskDateTime">
        <span>{task.createdOnDate}</span>
        <span>{task.createdOnTime}</span>
      </section>
    </div>
  );
};

export default SingleTask;
