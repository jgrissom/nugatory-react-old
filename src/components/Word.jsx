import React, { Component } from 'react';

class Word extends Component {
  state = {
    word: 'banana',
    color: 'yellow',
  }
  render() { 
    return (
      <div style={{ color:this.state.color, fontSize:'4em' }}>
        { this.state.word }
      </div>
    );
  }
}

export default Word
