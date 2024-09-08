import React from 'react';

function Counter(props) {
    render() { 
        return ( <div className='counter'>words: { props.totalWords }</div> );
    }
}

export default Counter;
