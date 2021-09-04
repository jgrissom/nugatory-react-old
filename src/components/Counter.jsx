import React, { Component } from 'react';

class Counter extends Component {
    render() { 
        return ( <div className='counter'>words: { this.props.totalWords }</div> );
    }
}

export default Counter;
