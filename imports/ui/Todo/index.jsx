import React from 'react';
import Task from '../Task';

import { getHumanDate } from '../../helpers';


import './main.css';

const Todo = ({ tasks, date, currentUser }) => {
  let complete = 0;

  const tasksList = tasks.map((task) => {
    if (task.checked) {
      ++complete;
    }

    return (
      <Task
        key={task._id}
        id={task._id}
        text={task.text}
        checked={task.checked}
        private={task.private}
        createdAt={task.createdAt}
        username={task.username}
        editAccess={task.owner === (currentUser && currentUser._id) }
      />
    );
  });

  return (
    <li className="todo">
      <div className="todo__inner">
        <div className="todo__title-and-subtitle">
          <h2 className="todo__title">
            {getHumanDate(date)}
          </h2>
          <p className="todo__subtitle">
            <span className="todo__subtitle-total">
              {tasks.length} 
            </span>

            <span className="todo__subtitle-divider">/</span>

            <span className="todo__subtitle-complete">
            {complete}
            </span>
          </p>
        </div>  
        <div className="todo__tasks-wrap">
          {/* <div className="todo-tasks__top-corners"></div> */}

          <ul className="todo__tasks">
            {tasksList}
          </ul>

          {/* <div className="todo-tasks__bottom-corners"></div> */}
        </div>
      </div>
    </li>
  );
}

export default Todo;
