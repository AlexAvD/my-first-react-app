import React, { useState } from 'react';

import TodoList from '../TodoList';

import './main.css';

const Content = ({ tasks, currentUser }) => {
  const [isChecked, setChecked] = useState(false);
  const checkedTask = tasks.filter((task) => task.checked);

  return (
    <div className="content">
      <div className="content__inner">
        <h1 className="content__title">{(currentUser) ? currentUser.username : 'public tasks'}</h1>
        <div className="content__tasks-info tasks-info">
          <span className="tasks-info__text tasks-info__total">
            {tasks.length} 
          </span>

          <label className="tasks-info__task-toggle">
            <input className="task-toggle__input" type="checkbox" onChange={() => {setChecked(!isChecked)}} checked={isChecked} />
            <div className="task-toggle__body">
              <span className="task-toggle__checkmark"></span>
              <span className="task-toggle__label task-toggle__label-all">all</span>
              <span className="task-toggle__label task-toggle__label-checked">checked</span>
            </div>
          </label>

          <span className="tasks-info__text tasks-info__checked">
            {checkedTask.length}
          </span>
        </div>
       
        <TodoList tasks={(isChecked) ? checkedTask : tasks} currentUser={currentUser} />
      </div>
    </div>
  )
}

export default Content;