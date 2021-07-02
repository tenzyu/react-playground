import {ISquare} from "./types";

const createNewSquares = (
  squares: ISquare[],
  xIsNext: boolean,
  i: number
) =>
  squares.map((square, index) => {
    if (i === index) {
      return xIsNext ? "X" : "O";
    }

    return square;
  });

export default createNewSquares