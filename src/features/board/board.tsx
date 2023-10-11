// Import dependencies from project files.
import { STAGES } from '../../consts/stages';
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
const updateOffset = (direction: Direction, currentOffset: Offset) => {
  let newOffset = {...currentOffset};

  switch (direction) {
    case Direction.N:
      newOffset.y -= SQUARE_SIZE;
      break;
    case Direction.E:
      newOffset.x += SQUARE_SIZE;
      break;
    case Direction.S:
      newOffset.y += SQUARE_SIZE;
      break;
    case Direction.W:
      newOffset.x -= SQUARE_SIZE;
      break;
    case Direction.NE:
      newOffset.x += SQUARE_SIZE / 2;
      newOffset.y -= SQUARE_SIZE / 2;
      break;
    case Direction.NW:
      newOffset.x += 0;
      newOffset.y -= SQUARE_SIZE / 2;
  }

  return newOffset;
};

/**
 * Switch statement that returns a new direction based on the current
 * direction and the next tile type.
 */
const updateDirection = (direction: Direction, tileType: TileType) => {
  switch (tileType) {
    case TileType.SHARP_LEFT:
      return (direction - 45) % 360;
    case TileType.SHARP_RIGHT:
      return (direction + 45) % 360;
    case TileType.SOFT_LEFT:
      return (direction - 22.5) % 360;
    case TileType.SOFT_RIGHT:
      return (direction + 22.5) % 360;
    case TileType.STRAIGHT:
    default:
      return direction;
  };
};

const Board = ({ stage }: BoardProps): JSX.Element => {
  const squares: any[] = [];

  /**
   * These values are used to keep track and calculate how
   * each square should be positioned and rotated.
   */
  let currentOffset = {
    x: 0,
    y: 0
  };
  let currentDirection = Direction.E;

  // Iterate over all the track tiles in the stage.
  STAGES['Ballons Centrale'].forEach((tileKey, t) => {
    // Iterate over all squares of the track tile.
    TRACK_TILES[tileKey].forEach((square, s) => {
      // Use the two indexes from the forEach loops to create a unique key string.
      console.log('current direction:', currentDirection);
      console.log('current offset:', currentOffset);
      squares.push(
        <Square
          key={t.toString() + s.toString()}
          offset={currentOffset}
          rotation={currentDirection}
          terrainType={square.terrainType}
          tileType={square.tileType}
        />
      );
      currentDirection = updateDirection(currentDirection, square.tileType);
      currentOffset = updateOffset(currentDirection, currentOffset);
    });
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