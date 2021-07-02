import React from "react";
import {MovesProps} from "./utils/types";


const Moves: React.FC<MovesProps> = ({histories, jumpTo}) => (
  <ol>
    {histories.map((_, move) => {
      const desc = move ? `Go to move #${move}` : "Go to game start";
      return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{desc}</button>
        </li>
      );
    })}
  </ol>
);

export default Moves;