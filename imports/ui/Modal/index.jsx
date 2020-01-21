import React from 'react';

import './main.css';

const Modal = ({isOpened}) => {
  
  return (
    <div className={`modal ${(isOpened) ? 'modal--open' : ''}`}>
      <div className="modal__inner">
        <div className="modal__content">
          <div className="modal__header">
            are you sure?
          </div>
          <div className="modal__body">
            <button 

              className="btn"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;