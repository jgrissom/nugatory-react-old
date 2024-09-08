import React, { Component } from 'react';

class NewWord extends Component {
  state = {
    showForm: false,
    word: '',
    color: '#000000',
  }
  toggleForm = () => {
    const { showForm } = this.state;
    this.setState({ showForm : !showForm });
    if (showForm) {
      this.setState({ word: '', color: '#000000' });
    }
  }
  saveWord = () => {
    const { word, color } = this.state;
    this.props.onAdd(word, color);
    this.toggleForm();
  } 
  render() { 
    const { showForm, word, color } = this.state;
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
                onChange={ (e) => this.setState({ [e.target.name]: e.target.value}) }
                placeholder="Word"
                autoFocus
                autoComplete="off" />
              <input 
                type="color"
                id="color"
                name="color"
                value={ color }
                onChange={ (e) => this.setState({ [e.target.name]: e.target.value}) }
                placeholder="Color"
                autoComplete="off" />
              <button 
                disabled={ word.trim().length === 0 } 
                onClick={ this.saveWord } 
                type="button">
                Save
              </button>
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
