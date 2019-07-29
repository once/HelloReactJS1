import React, { Component } from 'react';

export default class Profile extends Component {

    

    constructor(props) {
      super(props);
      
      this.namesArray = ["Oleg", "Alex", "Mark"];
      console.log('Profile constructor called!');
      this.state = {
          nameIndex : 0
      };
    }
    
   
    render() {
      
      return (
       <div>This is profile of 
           <button onClick={()=>{
               this.setState(
                 (prevState) => { return {nameIndex : (prevState.nameIndex == this.namesArray.length-1) ? 0 : prevState.nameIndex + 1} }
                 );
               console.log('clicked');
               }}>
                {this.namesArray[this.state.nameIndex]}
               </button>
        </div>
      );
    }
}