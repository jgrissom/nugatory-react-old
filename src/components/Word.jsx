import React, { Component } from 'react';

class Word extends Component {
  // helper method
  renderColor(color) {
    return (color === undefined || color === null ? 'black' : color);
  }
  componentDidMount() {
    const el = document.getElementById(this.props.word.id);
    console.log(el);
  }
  componentWillUnmount() {
    console.log(`goodbye, ${ this.props.word.word }`);
  }
  render() { 
    const { onDelete, word } = this.props;
    return (
      <div id={ word.id } onClick={ () => onDelete(word.id) } className='Word' style={{ color:this.renderColor(word.color) }}>
        { word.word }
      </div>
    );
  }
}

export default Word
