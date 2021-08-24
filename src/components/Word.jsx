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
      <div style={{ color:this.renderColor(this.state.color), fontSize:'4em' }}>
        { this.state.word }
      </div>
    );
  }
}

export default Word
