// Repository:  nugatory-react
// Author:      Jeff Grissom
// Version:     4.xx
import React, { Component } from 'react';
import Word from './components/Word';
import Counter from './components/Counter';
import NewWord from './components/NewWord';
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
  handleAdd = (word, color) => {
    console.log(`word: ${word}, color: ${color}`);
  }
  componentDidMount() {
    console.log("App mounted");
  }
  render() { 
    const { words } = this.state;
    return ( 
      <div className="App">
        <header className="App-header">
          nugatory
        </header>
        { words.map(word => 
          <Word 
            key={ word.id } 
            word={ word } 
            onDelete={ this.handleDelete } />
        )}
        <Counter totalWords={ words.length } />
        <NewWord onAdd={ this.handleAdd } />
      </div>
     );
  }
}
 
export default App;
