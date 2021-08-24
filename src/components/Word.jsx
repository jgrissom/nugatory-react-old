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
    console.log('word clicked');
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
