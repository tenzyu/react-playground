import React, {useState} from 'react'
import Board from "./board";
import Moves from "./moves";
import calculateWinner from "./utils/calculate-winner";
import createNewSquares from "./utils/create-new-squares";
import getStatus from "./utils/get-status";
import {Histories, ISquare} from "./utils/types";

export const Game = () => {
  const [histories, setHistory] = useState<Histories>(
    [{
      squares: Array<ISquare>(9).fill(null)
    }]
  );

  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (i: number) => {
    const _squares = histories[stepNumber]?.squares;

    if (calculateWinner(_squares) || _squares[i]) {
      return;
    }

    const squares = createNewSquares(_squares, xIsNext, i);
    const newHistories = [...histories, {squares}];

    setHistory(newHistories);
    setStepNumber(histories.length);
    setXIsNext(!xIsNext);
  }

  const jumpTo = (step: number) => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  }

  const current = histories[stepNumber];

  const winner = calculateWinner(current.squares);

  const status = getStatus(winner, xIsNext)
  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current.squares} onClick={handleClick}/>
      </div>
      <div className="game-info">
        <div>{status}</div>
        <Moves histories={histories} jumpTo={jumpTo}/>
      </div>
    </div>
  );
};


