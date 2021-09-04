import React, { Component } from 'react';

class NewWord extends Component {
  state = {
    showForm: false,
  }
  toggleForm = () => this.setState({ showForm : !this.state.showForm });
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
              <button onClick={this.toggleForm} type="button">Cancel</button>
            </form>
          :
            <span onClick={this.toggleForm} className='Toggle-form'>New Word</span>
        }
      </div>
    );
  }
}

export default NewWord;
