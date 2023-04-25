// Import dependencies from project files.
import { TRACK_TILES, SQUARE_SIZE } from '../../consts/track-tiles';
import Square from '../square/square';

// Import types.
import { Direction } from '../app/app-types';
import { Stage, Offset } from './board-types';
import { TileType } from '../square/square-types';

/// Import styles.
import './board.css';

type BoardProps = {
  stage: Stage;
};

/**
 * Math to figure out how a square should be positioned, based on the last
 * square's position, and the current direction the last square is facing.
 */
const calculateOffsets = (direction: Direction, currentOffset: Offset) => {
  let newOffset = currentOffset;

  switch (direction) {
    case Direction.N:
      newOffset.Y += SQUARE_SIZE;
      break;
    case Direction.NE:
      newOffset.X += SQUARE_SIZE / 2;
      newOffset.Y += SQUARE_SIZE / 2;
      break;
  }

  return newOffset;
};

const Board = ({ stage }: BoardProps): JSX.Element => {
  const squares = TRACK_TILES[stage[10]].map((square, index) => {
    console.log(square.tileType);
    return (
      <Square key={index} terrainType={square.terrainType} tileType={square.tileType} />
    );
  });

  return (
    <div className="Board">
      <div className="Board__wrapper">
        {squares}
      </div>
    </div>
  );
};

export default Board;