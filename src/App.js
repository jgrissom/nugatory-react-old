// Repository:  nugatory-react
// Author:      Jeff Grissom
// Version:     2.xx
import React, { Component } from 'react';
import './App.css';
import Word from './components/Word';

class App extends Component {
  state = {
    words: [
      { id: 1, word: 'banana', color: 'yellow' },
      { id: 2, word: 'apple', color: 'red' },
      { id: 3, word: 'lime', color: 'green' },
    ]
  }
  handleDelete = (wordId) => {
    console.log(`delete word: ${wordId}`);
  }
  render() { 
    return ( 
      <div className="App">
        <header className="App-header">
          nugatory
        </header>
        { this.state.words.map(word => 
          <Word 
            key={ word.id } 
            id={ word.id }
            onDelete={ this.handleDelete }
            word={ word.word } 
            color={ word.color } 
          />) }
      </div>
     );
  }
}
 
export default App;
