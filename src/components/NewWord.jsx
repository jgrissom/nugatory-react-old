import React, { Component } from 'react';

class NewWord extends Component {
  state = {
    showForm: false,
    word: '',
    color: '#000000',
  }
  toggleForm = () => this.setState({ showForm : !this.state.showForm });
  handleChange = (e) => this.setState({ [e.target.name]: e.target.value});
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
                onChange={ this.handleChange }
                placeholder="Word"
                autoComplete="off" />
              <input 
                type="color"
                id="color"
                name="color"
                value={ color }
                onChange={ this.handleChange }
                placeholder="Color"
                autoComplete="off" />
              <button onClick={ this.saveWord } type="button">Save</button>
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
