import React, { useLayoutEffect, useRef } from 'react';

const Word = props => {
  wordEl = React.createRef();
  
  // helper method
  renderColor(color) {
    return (color === undefined || color === null ? 'black' : color);
  }
  // return random integer between min & max
  getRandomInt = (min, max) => parseInt(Math.random() * (max - min) + min);
 
  componentDidMount() {
    const el = this.wordEl.current;
    el.style.top = this.getRandomInt(0, window.innerHeight - el.clientHeight) + 'px';
    el.style.left = this.getRandomInt(0, window.innerWidth - el.clientWidth) + 'px';
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
