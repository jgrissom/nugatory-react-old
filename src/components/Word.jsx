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
  render() { 
    return (
      <div className='Word' style={{ color:this.renderColor(this.state.color) }}>
        { this.state.word }
      </div>
    );
  }
}

export default Word
