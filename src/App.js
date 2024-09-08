// Repository:  nugatory-react
// Author:      Jeff Grissom
// Version:     4.xx
import React, { useState, useEffect } from 'react';
import Word from './components/Word';
import Counter from './components/Counter';
import NewWord from './components/NewWord';
import './App.css';

function App() {
  // create "state" array to store words
  const [words, setWords] = useState([]);
  handleDelete = (wordId) => {
    const words = this.state.words.filter(w => w.id !== wordId);
    this.setState({ words:words });
  }
  handleAdd = (word, color) => {
    const { words } = this.state;
    const id = words.length === 0 ? 1 : Math.max(...words.map(word => word.id)) + 1;
    const mutableWords = words.concat({ id: id, word: word, color: color });
    this.setState({ words:mutableWords });
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
