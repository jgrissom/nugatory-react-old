import React, { Component } from 'react';

class NewWord extends Component {
  render() { 
    return (
      <div>
        <form>
          <input 
            type="text"
            id="word"
            placeholder="Word"
            autoComplete="off" />
          <input 
            type="color"
            id="color"
            placeholder="Color"
            autoComplete="off" />
          <button type="button">Save</button>
          <button type="button">Cancel</button>
        </form>
        <span>New Word</span>
      </div>
    );
  }
}

export default NewWord;
