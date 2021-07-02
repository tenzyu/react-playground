import Square from './square'
import React from 'react'
import {BoardProps} from "./utils/types";

const Board: React.FC<BoardProps> = ({squares, onClick}) => {
  return (
    <div className="board">
      {Array<number>(9)
        .fill(0)
        .map((_, i) => (
          <Square key={i} value={squares[i]} onClick={() => onClick(i)}/>
        ))}
    </div>
  );
}

export default Board