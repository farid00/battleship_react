import React from 'react';

const Tile = ({state, handleClick}) => {
  return (
    <button className="square" onClick={handleClick}> {state} </button>
    )
} 
export default Tile
