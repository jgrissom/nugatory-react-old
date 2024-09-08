import React, { useState, useEffect } from 'react';

function NewWord() {
  const [word, setWord] = useState('');
  const [color, setColor] = useState('#000000');
  const [showForm, setShowForm] = useState(false);
  
  saveWord = () => {
    const { word, color } = this.state;
    this.props.onAdd(word, color);
  } 
  render() { 
    const { showForm, word, color } = this.state;
    return (
      <div className='New-word'>
        {
          (showForm) ? 
            <form>
              <input 
                type="text"
                id="word"
                name="word"
                value={ word }
                onChange={ (e) => this.setState({ [e.target.name]: e.target.value}) }
                placeholder="Word"
                autoFocus
                autoComplete="off" />
              <input 
                type="color"
                id="color"
                name="color"
                value={ color }
                onChange={ (e) => this.setState({ [e.target.name]: e.target.value}) }
                placeholder="Color"
                autoComplete="off" />
              <button 
                disabled={ word.trim().length === 0 } 
                onClick={ this.saveWord } 
                type="button">
                Save
              </button>
              <button onClick={ () => this.setState({ showForm : false }) } type="button">Cancel</button>
            </form>
          :
            <span onClick={ () => this.setState({ showForm : true }) } className='Toggle-form'>New Word</span>
        }
      </div>
    );
  }
}

export default NewWord;
