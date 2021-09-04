import React, { Component } from 'react';

class NewWord extends Component {
  state = {
    showForm: false,
  }
  render() { 
    return (
      <div className='New-word'>
        {
          (this.state.showForm) ? 
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
          :
            <span className='Toggle-form'>New Word</span>
        }
      </div>
    );
  }
}

export default NewWord;
