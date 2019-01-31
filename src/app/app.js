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

    renderSquare(c) {
      return (
      <Square 
        value={this.props.squares[c]} 
        onClick={() => this.props.onClick(c) } />
      );
    }
  
    render() {

      return (
        <div>
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

    constructor(props) {

        super(props);
        this.state = {
          history : [
            { squares : Array(9).fill(null) }
          ],
          xIsNext : true
        }
    }

     // TODO : add Game over if no more free cells on board, but we still have no winner

     handleClick(c) {
      
      const history = this.state.history;
      const current = history[history.length-1];

      // here we create copy of an existing array
      const squares = current.squares.slice();
      
      // if we aleready have a winner, or if a square already has a value, return
      if (calculateWinner(squares) || squares[c]) {
        return;
      }

      squares[c] = this.state.xIsNext ? 'X' : 'O';

      this.setState({
        history : history.concat([{ squares : squares }]),
        xIsNext : !this.state.xIsNext
      });
    }

    render() {

      const history = this.state.history;
      const current  = history[history.length-1];
      const winner = calculateWinner(current.squares);

      let status;

      if (winner) {
        status = 'Winner: ' + winner;
      }
      else {
        status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
      }
      
      return (
        
        <div className="game">
          <div className="game-board">
            <Board squares={current.squares} onClick={ (i) => this.handleClick(i) } />
          </div>
          <div className="game-info">
            <div>{status}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }


ReactDOM.render(<Game />,
  document.getElementById('app'));
  