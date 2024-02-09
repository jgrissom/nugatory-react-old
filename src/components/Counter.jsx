import React from 'react';

const Counter = props => {
    render() { 
        return ( <div className='counter'>words: { this.props.totalWords }</div> );
    }
}

export default Counter;
