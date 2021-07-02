import {SquareProps} from "./utils/types";
import React from 'react'

const Square: React.FC<SquareProps> = ({value, onClick}) => (
  <button className="square" onClick={onClick}>
    {value}
  </button>
);

export default Square