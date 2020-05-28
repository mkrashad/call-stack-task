import React from 'react';
import './error.scss';

function Error({ message, onClear }) {
  return (
    <div className="errorMessage">
      <h3>{message}</h3>
      <div>


        <span onClick={onClear}>&#10006;</span>
      </div>
    </div>
  );
}

export default Error;
