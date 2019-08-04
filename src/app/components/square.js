import React, { Component } from 'react';

// It's a function-component
  export default function Square(props) {
    return (
      <button 
          className="square" 
          onClick={props.onClick}>
            {props.value}
      </button>
    );

  }