import React, { Component } from 'react';

class Word extends Component {
  // helper method
  renderColor(color) {
    return (color === undefined || color === null ? 'black' : color);
  }
  render() { 
    console.log(this.props);
    return (
      <div onClick={ () => this.props.onDelete(this.props.word.id) } className='Word' style={{ color:this.renderColor(this.props.word.color) }}>
        { this.props.word.word }
      </div>
    );
  }
}

export default Word
