import React, { Component } from 'react';

class Word extends Component {
  wordEl = React.createRef();
  
  // helper method
  renderColor(color) {
    return (color === undefined || color === null ? 'black' : color);
  }
  // return random number between min & max
  getRandomNumber = (min, max) => Math.random() * (max - min) + min;
  // return random number between 0 and window height
  getRandomTop = (height) => parseInt(this.getRandomNumber(0, window.innerHeight - height));
  // return random number between 0 and window width
  getRandomLeft = (width) => parseInt(this.getRandomNumber(0, window.innerWidth - width));

  componentDidMount() {
    const el = this.wordEl.current;
    el.style.top = this.getRandomTop(el.clientHeight) + 'px';
    el.style.left = this.getRandomLeft(el.clientWidth) + 'px';
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
