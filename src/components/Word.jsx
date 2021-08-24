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
  handleClick() {
    // the following will fail - we cannot access 'this' object
    // this.state is undefined
    console.log(this.state.color);
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
