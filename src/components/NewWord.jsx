import React, { useState, useEffect } from 'react';

function NewWord(props) {
  const [word, setWord] = useState('');
  const [color, setColor] = useState('#000000');
  const [showForm, setShowForm] = useState(false);

  function saveWord() {
    props.onAdd(word, color);
    setShowForm(false);
  } 
  useEffect(() => {
    // this "hook" is called whenever showForm value changes
    if (showForm) {
      setWord('');
      setColor('#000000');
    }
  }, [showForm]) 
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
              onChange={ (e) => setWord(e.target.value) }
              placeholder="Word"
              autoFocus
              autoComplete="off" />
            <input 
              type="color"
              id="color"
              name="color"
              value={ color }
              onChange={ (e) => setColor(e.target.value) }
              placeholder="Color"
              autoComplete="off" />
            <button 
              disabled={ word.trim().length === 0 } 
              onClick={ saveWord } 
              type="button">
              Save
            </button>
            <button onClick={ () => setShowForm(false) } type="button">Cancel</button>
          </form>
        :
        <span onClick={ () => setShowForm(true) } className='Toggle-form'>New Word</span>
      }
    </div>
  );
}

export default NewWord;
