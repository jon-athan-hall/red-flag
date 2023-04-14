// Import dependencies from project files.
import { TRACK_TILES } from '../../consts/track-tiles';
import Square from '../square/square';

// Import types.
import { Stage } from '../board/board-types';

/// Import styles.
import './board.css';

type BoardProps = {
  stage: Stage;
};

const Board = ({ stage }: BoardProps): JSX.Element => {
  let offsetX: number = 0;
  let offsetY: number = 0;

  const squares = TRACK_TILES[stage[0]].map(square => {
    offsetX = offsetX + 10;
    offsetY = offsetY + 10;

    return (
      <Square
        offsetX={offsetX}
        offsetY={offsetY}
        terrainType={square.terrainType}
        tileType={square.tileType}
      />
    );
  });
  return (
    <div className="Board">
      {squares}
    </div>
  );
};

export default Board;