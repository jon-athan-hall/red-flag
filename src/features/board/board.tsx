// Import dependencies from project files.
import { TRACK_TILES, SQUARE_SIZE } from '../../consts/track-tiles';
import Square from '../square/square';

// Import types.
import { Direction } from '../app/app-types';
import { Stage, Offset } from '../board/board-types';
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
  let currentDirection: Direction = Direction.N;
  let offset: Offset = { X: 0, Y: -50 };

  const squares = TRACK_TILES[stage[9]].map((square, index) => {
    offset = calculateOffsets(currentDirection, offset);

    switch (square.tileType) {
      case TileType.SHARP_LEFT:
        currentDirection = (currentDirection - 45) % 360;
        break;

      case TileType.SHARP_RIGHT:
        currentDirection = (currentDirection + 45) % 360;
        break;
      
      case TileType.SOFT_LEFT:
        currentDirection = (currentDirection - 22.5) % 360;
        break;
      
      case TileType.SOFT_RIGHT:
        currentDirection = (currentDirection + 22.5) % 360;
        break;

      case TileType.STRAIGHT:
      default:
        // Do nothing.
    }

    return (
      <Square
        key={index}
        offsetX={offset.X}
        offsetY={offset.Y}
        rotation={currentDirection}
        terrainType={square.terrainType}
        tileType={square.tileType}
      />
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