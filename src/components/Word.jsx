import React, { Component } from 'react';

class Word extends Component {
  state = {
    word: this.props.word.word,
    color: this.props.word.color,
  }
  // helper method
  renderColor(color) {
    return (color === undefined || color === null ? 'black' : color);
  }
  render() { 
    console.log(this.props);
    return (
      <div onClick={ () => this.props.onDelete(this.props.word.id) } className='Word' style={{ color:this.renderColor(this.state.color) }}>
        { this.state.word }
      </div>
    );
  }
}

export default Word
