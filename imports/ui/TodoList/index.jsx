import React, { Component } from 'react';
import Todo from '../Todo';
import { getDate } from '../../helpers';

import './main.css';

const TodoList = ({tasks, currentUser}) => {
  const todoLists = renderTodoLists(tasks, currentUser);

  return (
    <ul className="todo-list">
      {todoLists}
    </ul>
  );
}

const getKey = (data) => {
  return new Date(data).getTime();
}

const renderTodoLists = (tasks, currentUser) => {
  const todoListsDividedByDates = tasks.reduce((acc, task)  => {
    const date = getDate(task.createdAt);

    if (date in acc) {
      acc[date].push(task);
    } else {
      acc[date] = [task];
    }

    return acc;
  }, {});

  const todoLists = [];

  for (date in todoListsDividedByDates) {
    todoLists.push(
      <Todo
        key={getKey(date)} 
        tasks={todoListsDividedByDates[date]}
        date={date}
        currentUser={currentUser}
      />
    );
  }

  return todoLists;
}

export default TodoList;