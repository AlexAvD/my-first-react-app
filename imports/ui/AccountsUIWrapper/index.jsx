import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';

import './main.css';
 
export default class AccountsUIWrapper extends Component {
  componentDidMount() {
    this.view = Blaze.render(Template.loginButtons, ReactDOM.findDOMNode(this.refs.login));
    console.log(this.view);
    /* const loginInput = document.getElementById('login-username');
    const passwordInput = document.getElementById('login-password');
    loginInput.setAttribute('placeholder', 'Enter your username');
    passwordInput.setAttribute('placeholder', 'Enter your password'); */
  }
  
  componentWillUnmount() {
    Blaze.remove(this.view);
  }

  render() {
    return <div className="login-inner" ref="login"></div>;
  }
}