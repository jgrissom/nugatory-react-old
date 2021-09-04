// Repository:  nugatory-react
// Author:      Jeff Grissom
// Version:     2.xx
import React, { Component } from 'react';
import './App.css';
import Word from './components/Word';

class App extends Component {
  render() { 
    return ( 
      <div className="App">
        <header className="App-header">
          nugatory
        </header>
        <Word />
        <Word />
        <Word />
      </div>
     );
  }
}
 
export default App;
