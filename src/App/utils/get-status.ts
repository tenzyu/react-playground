import {ISquare} from "./types";

const getStatus = (winner: ISquare, xIsNext: boolean) => {
  if (winner) {
    return `Winner: ${winner}`;
  } else {
    const nextPlayer = xIsNext ? "X" : "O";
    return `Next player: ${nextPlayer}`;
  }
};

export default getStatus