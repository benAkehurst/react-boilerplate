import { useState } from 'react';
import './NewTask.scss';

const NewTask = (props: any) => {
  const [newTaskText, setNewTask] = useState('');

  return (
    <div className="newTaskWrapper">
      <label>New Task</label>
      <div className="inputWrapper">
        <input
          type="text"
          value={newTaskText}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={() => props.addTaskHandler(newTaskText)}>
          Save Task
        </button>
      </div>
    </div>
  );
};

export default NewTask;
