import React from 'react';
import Board from './Board';

export default function Game() {
  const gameStatus = 'Next player is x';
  const moves = (
    <li>
      <button>Start the Game</button>
    </li>
  );
  const squares = Array(9).fill(null);

  return (
    <>
      <div className='game-board'>
        <Board squares={squares}></Board>
      </div>
      <div className='game-info'>
        <div>{gameStatus}</div>
        <ul>{moves}</ul>
      </div>
    </>
  );
}
