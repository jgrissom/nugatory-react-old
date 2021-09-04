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
  getRandomTop = () => parseInt(this.getRandomNumber(0, window.innerHeight));
  // return random number between 0 and window width
  getRandomLeft = () => parseInt(this.getRandomNumber(0, window.innerWidth));

  componentDidMount() {
    this.wordEl.current.style.top = this.getRandomTop() + 'px';
    this.wordEl.current.style.left = this.getRandomLeft() + 'px';
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
