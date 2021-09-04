import React, { Component } from 'react';

class Word extends Component {
  state = {
    word: this.props.word,
    color: this.props.color,
  }
  // helper method
  renderColor(color) {
    return (color === undefined || color === null ? 'black' : color);
  }
  render() { 
    console.log(this.props);
    return (
      <div onClick={ this.props.onDelete } className='Word' style={{ color:this.renderColor(this.state.color) }}>
        { this.state.word }
      </div>
    );
  }
}

export default Word
