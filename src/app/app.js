import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './app.css';

class HelloReactComponent extends Component {

    constructor(props) {
      super(props);
    }
    
   
    render() {
      
      return (
       <div>Hello React!</div>
      );
    }
  }

  // It's a function-component
  function Square(props) {
    return (
      <button 
          className="square" 
          onClick={props.onClick}>
            {props.value}
      </button>
    );

  }
  
  class Board extends Component {

    constructor(props) {

      super(props);

      this.state = { 
        squares : Array(9).fill(null),
        xIsNext : true
      };
      
    }


    handleClick(c) {
      
      // here we create copy of an existing array
      const squares = this.state.squares.slice();
      
      squares[c] = this.state.xIsNext ? 'X' : 'O';

      this.setState({
        squares : squares,
        xIsNext : !this.state.xIsNext
      });
    }


    renderSquare(c) {
      return (
      <Square 
        value={this.state.squares[c]} 
        onClick={() => this.handleClick(c) } />
      );
    }
  
    render() {
      const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }

ReactDOM.render(<Game />,
  document.getElementById('app'));
  