export type ISquare = 'X' | 'O' | null;

export interface SquareProps {
  value: ISquare;
  onClick: () => void;
}

export interface BoardProps {
  squares: ISquare[];
  onClick: (i: number) => void;
}

export interface History {
  squares: ISquare[];
}

export type Histories = History[];

export interface MovesProps {
  histories: Histories;
  jumpTo: (move: number) => void;
}