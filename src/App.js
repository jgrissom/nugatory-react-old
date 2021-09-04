// Repository:  nugatory-react
// Author:      Jeff Grissom
// Version:     2.xx
import React, { Component } from 'react';
import Word from './components/Word';
import Counter from './components/Counter';
import './App.css';

class App extends Component {
  state = {
    words: [
      { id: 1, word: 'banana', color: 'yellow' },
      { id: 2, word: 'apple', color: 'red' },
      { id: 3, word: 'lime', color: 'green' },
    ]
  }
  handleDelete = (wordId) => {
    const words = this.state.words.filter(w => w.id !== wordId);
    this.setState({ words:words });
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
            word={ word } 
            onDelete={ this.handleDelete } />
        )}
        <Counter totalWords={ this.state.words.length } />
      </div>
     );
  }
}
 
export default App;
