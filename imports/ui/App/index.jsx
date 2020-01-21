import React from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
// Api
import { Tasks } from '../../api/tasks.js';
// Components
import Main from '../Main';
import Header from '../Header';

import './main.css';

const App = (props) => {
  return (
    <>
      <Header currentUser={props.currentUser} />
      <Main {...props} />
    </>
  );
};

export default withTracker(() => {
  Meteor.subscribe('tasks');

  const currentUser = Meteor.user();

  return {
    tasks: (currentUser) ? Tasks.find({username: currentUser.username}, {sort: { createdAt: -1 } }).fetch() : Tasks.find({}, { sort: { createdAt: -1 } }).fetch(),
    currentUser
  }
})(App);