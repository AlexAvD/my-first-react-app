import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import AccountsUIWrapper from '../AccountsUIWrapper';

import { 
  FiLogIn,
  FiArrowLeft,
  FiCornerRightDown
} from 'react-icons/fi';

import './main.css';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      text: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    
    const { text } = this.state;

    if (text) {
      this.addTask();
      this.setState({
        text: ''
      });
    }
  }

  addTask() {
    Meteor.call('tasks.insert', this.state.text);
  }

  render() {
    return (
      <header className="header">
        <div className="container">
          <div className="header__inner gutter">

            <div className="header__logo-box">
              <h2 className="header__logo">
                Todo List
              </h2>
            </div>
            
            <div className="header__task-form-box">

              {(this.props.currentUser) ? (
                <form 
                 onSubmit={this.handleSubmit}
                 className="header__task-form">
                 <input 
                   value={this.state.text}
                   onChange={this.handleChange}
                   className="task-form__input"
                   type="text"
                   placeholder="Type to add new tasks"
                 />
                 <button
                   type="submit"
                   className="task-form__submit-btn btn"
                 >
                   {
                     (this.state.text) ? 
                     <FiCornerRightDown color="#00ce90" strokeWidth="1" /> : 
                     <FiArrowLeft strokeWidth="1" />
                   }
                 </button>
               </form>
              ) : null}

            </div>
            
            <div className="header__login-btn-box">
              <AccountsUIWrapper />
            </div>

          </div>
        </div>
      </header>
    );
  }
}