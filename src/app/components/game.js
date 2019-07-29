import React, { Component } from 'react';
import Board from "./board";
import Profile from './profile';


export default class Game extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
          history : [
            { squares : Array(9).fill(null),
              filledSqare :  null
            }
          ],
          xIsNext : true,
          stepNumber: 0
        }
    }

     // TODO : add Game over if no more free cells on board, but we still have no winner

     handleClick(c) {
      
      const history = this.state.history.slice(0,this.state.stepNumber+1);
      const current = history[history.length-1];

      // here we create copy of an existing array
      const squares = current.squares.slice();
      
      // if we aleready have a winner, or if a square already has a value, return
      if (calculateWinner(squares) || squares[c]) {
        return;
      }

      squares[c] = this.state.xIsNext ? 'X' : 'O';

      this.setState({
        history : history.concat([{ squares : squares, filledSqare : { col : 0, row: 0} }]),
        xIsNext : !this.state.xIsNext,
        stepNumber : history.length
      });
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0,
          });
    }

    render() {

      const history = this.state.history;
      const current  = history[this.state.stepNumber];
      const winner = calculateWinner(current.squares);

      const moves = history.map((step, move) => {
        const description = move ?
          'Go to move #' + move + "(" + step.filledSqare + ")" :
          'Go to game start';
        return (
          <li key={move}>
            <button onClick={() => this.jumpTo(move)}>{description}</button>
          </li>
        );
      });

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
            <ol>{moves}</ol>
            
          </div>
          <div className="profile">
          <Profile name="Oleg"></Profile>
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
