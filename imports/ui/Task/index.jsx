import React, { useRef, useEffect, useState } from 'react';
import { Meteor } from 'meteor/meteor';
import { getTokenizedTime } from '../../helpers';

import { 
  FiSquare, 
  FiCheck,
  FiEye,
  FiEyeOff,
  FiEdit3,
  FiX
} from 'react-icons/fi';

import './main.css';

const Task = ({ id, text, createdAt, private, checked, username, editAccess}) => {
  const [ isDeleted, setDeleted ] = useState(false);
  
  const toggleCheckedTask = () => {
    Meteor.call('tasks.setChecked', id, !checked);
  };

  const togglePrivate = () => {
    Meteor.call('tasks.setPrivate', id, !private);
  };

  const deleteTask = () => {
    setDeleted(!isDeleted);

    setTimeout(() => {
      Meteor.call('tasks.remove', id);
    }, 300);
  };

  const tokenizedTime = getTokenizedTime(createdAt);

  return (
    <li className={`task ${(checked) ? 'task--complete' : ''} ${(isDeleted) ? 'task--deleted' : ''}`}>
      <div className="task__header">
        <div className="task-header__controls">
         
          <div className="task-header__controls-inner">
            <button 
              onClick={toggleCheckedTask}
              className={`task-header__btn task-header-controls__check-btn btn ${checked ? 'task-header-controls__check-btn--checked' : ''}`}>
              <FiSquare />
              <span className="task-header-controls__check-btn-mark">
                <FiCheck />
              </span>
            </button>

            {(editAccess) ? (
              <>
                <div className="task-header-controls__divider"></div>
                <button 
                  onClick={togglePrivate}
                  className="task-header__btn btn">
                  { (private) ? <FiEyeOff /> : <FiEye /> }
                </button>
              </>
            ) : null}
            
          </div>

          {/*
            <div className="task-header-controls__divider"></div>
          */}
          
          {/*  
          <button 
            className="task-header__btn btn">
            <FiEdit3 />
          </button> 
          */}
        </div>

        <div className="task-header__username-and-time">
          <div className="task-header__username-and-time-inner">
            <span className="task-header__username">{username}</span>
            at
            <span className="task-header__time">{tokenizedTime.time}</span>
            {tokenizedTime.meridiem}
          </div>
        </div>

        <button 
          onClick={deleteTask}
          className="task-header__btn task-header__delete-btn btn">
          <FiX />
        </button>
        
       
        
      </div>
      <div className="task__body">
        <p className="task-body__text">
          {text}
        </p>
      </div>
    </li>
  );
}

export default Task;