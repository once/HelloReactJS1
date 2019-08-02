import React, { Component } from 'react';
import Square from "./square";


export default class Board extends Component {

    constructor(props) {
      super (props);
      console.log("Initializing board " + props.cols + " x " + props.rows);
    }
  
    render() {
      
      let currentSquare = 0;
      let boardRows = [];

      for (let i=0; i<this.props.rows; i++) {
        
        let boardCols = [];

        for (let j=0; j<this.props.cols; j++) {
          boardCols.push(
            <Square value={this.props.squares[currentSquare]} num={currentSquare} onClick={() => this.props.onClick(currentSquare) } />
          );
          currentSquare++;
        }

        boardRows.push(
          <div className={"board-row row-" + i}>
            {boardCols}    
          </div>
        );
      }

      return (
        <div>
          {boardRows}
        </div>
      );
     
    }
  }