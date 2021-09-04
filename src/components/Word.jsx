import React, { Component } from 'react';

class Word extends Component {
  wordEl = React.createRef();
  
  // helper method
  renderColor(color) {
    return (color === undefined || color === null ? 'black' : color);
  }
  componentDidMount() {
    console.log(this.wordEl.current);
  }
  componentWillUnmount() {
    console.log(`goodbye, ${ this.props.word.word }`);
  }
  render() { 
    const { onDelete, word } = this.props;
    return (
      <div ref={ this.wordEl } id={ word.id } onClick={ () => onDelete(word.id) } className='Word' style={{ color:this.renderColor(word.color) }}>
        { word.word }
      </div>
    );
  }
}

export default Word
