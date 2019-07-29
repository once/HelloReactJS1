import React, { Component } from 'react';

export default class Profile extends Component {

    

    constructor(props) {
      super(props);
      
      this.namesArray = ["Oleg", "Alex", "Mark"];
      
      this.state = {
          nameIndex : 1
      };
    }
    
   
    render() {
      
      return (
       <div>This is profile of 
           <button onClick={()=>{
               this.setState({nameIndex : this.state.nameIndex++});
               console.log('clicked');
               }}>
                {this.namesArray[this.state.nameIndex]}
               </button>
        </div>
      );
    }
}