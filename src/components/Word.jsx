import React, { Component } from 'react';

class Word extends Component {
  state = {
    word: 'banana',
    color: 'yellow',
  }
  render() { 
    return (
      <div>
        { this.state.word }
      </div>
    );
  }
}

export default Word
