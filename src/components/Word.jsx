import React, { Component } from 'react';

class Word extends Component {
  state = {
    word: 'banana',
    color: 'yellow',
  }
  // helper method
  renderColor(color) {
    return (color === undefined || color === null ? 'black' : color);
  }
  handleClick = () => {
    // convert the function to an arrow function
    // arrow functions inherit 'this' keyword
    console.log(this.state.color);
    // the following code will not re-render a component
    this.state.color = 'black';
  }
  render() { 
    return (
      <div onClick={ this.handleClick } className='Word' style={{ color:this.renderColor(this.state.color) }}>
        { this.state.word }
      </div>
    );
  }
}

export default Word
