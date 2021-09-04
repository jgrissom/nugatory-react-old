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
  render() { 
    return ( 
      <div className="App">
        <header className="App-header">
          nugatory
        </header>
        { this.state.words.map(word => <Word />) }
      </div>
     );
  }
}
 
export default App;
