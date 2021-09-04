import React, { Component } from 'react';

class Word extends Component {
  // helper method
  renderColor(color) {
    return (color === undefined || color === null ? 'black' : color);
  }
  componentDidMount() {
    console.log(`hello, ${ this.props.word.word }`);
  }
  componentWillUnmount() {
    console.log(`goodbye, ${ this.props.word.word }`);
  }
  render() { 
    const { onDelete, word } = this.props;
    return (
      <div onClick={ () => onDelete(word.id) } className='Word' style={{ color:this.renderColor(word.color) }}>
        { word.word }
      </div>
    );
  }
}

export default Word
