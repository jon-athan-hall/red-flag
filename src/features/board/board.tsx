// Import dependencies from project files.
import { STAGES } from '../../consts/stages';
import { TRACK_TILES, SQUARE_SIZE } from '../../consts/track-tiles';
import Square from '../square/square';

// Import types.
import { Direction } from '../app/app-types';
import { Stage, Offset } from './board-types';

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
  const squares: any[] = [];

  // Iterate over all the track tiles in the stage.
  STAGES['Avenue Corso Paseo'].forEach((tileKey, t) => {
    // Iterate over all squares of the track tile.
    TRACK_TILES[tileKey].forEach((square, s) => {
      // Use the two indexes from the forEach loops to create a unique key string.
      squares.push(
        <Square
          key={t.toString() + s.toString()}
          terrainType={square.terrainType}
          tileType={square.tileType}
        />
      );
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