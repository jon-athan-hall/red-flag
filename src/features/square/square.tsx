// Import dependencies from project files.
import { SQUARE_SIZE } from '../../consts/track-tiles';

// Import types.
import { Direction } from '../app/app-types';
import { Offset } from '../board/board-types';
import { TerrainType, TileType, SquareObject } from './square-types';

// Import styles.
import './square.css';

interface SquareProps extends SquareObject {
  offset: Offset;
  rotation: Direction;
};

/**
 * Numerical constants used to create different svg paths calculated
 * here instead of within the component.
 */
const W = SQUARE_SIZE;
const SHARP_RIGHT_ENDPOINT = {
  OUTER: {
    X: 1.25 * W * Math.cos(Math.PI / 4) + 1,
    Y: 1.25 * W - (1.25 * W * Math.sin(Math.PI / 4)) + 1
  },
  INNER: {
    X: 0.25 * W * Math.cos(Math.PI / 4) + 1,
    Y: 1.25 * W - (0.25 * W * Math.sin(Math.PI / 4)) + 1
  }
};
const SHARP_LEFT_ENDPOINT = {
  X: W * Math.cos(Math.PI / 4),
  Y: W - (W * Math.sin(Math.PI / 4))
};
const SOFT_RIGHT_ENDPOINT = {
  X: (W * Math.cos(Math.PI / 8)),
  Y: (W * Math.sin(Math.PI / 8))
};
const SOFT_LEFT_ENDPOINT = {
  X: 2 * (W * Math.cos(Math.PI / 8)),
  Y: 2 * (W - (W * Math.sin(Math.PI / 8)))
};

const Square = ({ offset, rotation, terrainType = TerrainType.DEFAULT, tileType }: SquareProps): JSX.Element => {
  let svgElement;

  switch (tileType) {
    case TileType.STRAIGHT:
      svgElement =
        <svg>
          <path d={`M 1 1 L ${W + 1} 1`} />
          <path d={`M 1 ${W + 1} L ${W + 1} ${W + 1}`} />
        </svg>;
      break;
    case TileType.SHARP_LEFT:
      /*
      svgElement =
        <svg height={W} width={W}>
          <path d={`M ${W} ${W} A ${W} ${W} 0 0 0 ${SHARP_LEFT_ENDPOINT.X} ${SHARP_LEFT_ENDPOINT.Y} L 0 ${W} Z`} />
        </svg>;
      break;
    case TileType.SHARP_RIGHT:
      svgElement =
        <svg>
          <path d={`M 0 0 A 24 24 0 0 1 ${24 / Math.sqrt(2)} ${24 / Math.sqrt(2)}`} />
        </svg>;
      break;
    case TileType.SOFT_LEFT:
      svgElement =
        <svg height={W} width={W}>
          <path d={`M ${W} ${W} A ${W} ${W} 0 0 0 ${SOFT_LEFT_ENDPOINT.X} ${SOFT_LEFT_ENDPOINT.Y} L 0 ${50} Z`} />
        </svg>;
      break;
      */
    case TileType.SOFT_RIGHT:
      svgElement =
        <svg>
          <path d={`M 1 1 A ${1.25 * W} ${1.25 * W} 0 0 1 ${SHARP_RIGHT_ENDPOINT.OUTER.X} ${SHARP_RIGHT_ENDPOINT.OUTER.Y}`} />
          <path d={`M 1 ${W + 1} A ${0.25 * W} ${0.25 * W} 0 0 1 ${SHARP_RIGHT_ENDPOINT.INNER.X} ${SHARP_RIGHT_ENDPOINT.INNER.Y}`} />
        </svg>;
      break;
          //<path d={`M 1 1 A ${1.25 * W} ${1.25 * W} 0 0 1 ${(1.25 * W) + 1} ${(1.25 * W) + 1}`} />
          //<path d={`M 1 ${W + 1} A ${0.25 * W} ${0.25 * W} 0 0 1 ${(0.25 * W) + 1} ${(1.25 * W) + 1}`} />
          //<path d={`M 0 1 A 24 24 0 0 1 ${24 / Math.sqrt(2)} ${24 / Math.sqrt(2)}`} />
          //<path d={`M 0 0 A 48 48 0 0 1 ${48 / Math.sqrt(2)} ${48 / Math.sqrt(2)}`} />
          //<path d={`M 0 24 A 24 24 0 0 1 ${24 / Math.sqrt(2)} ${24 + (24 / Math.sqrt(2))}`} />
          //<path d={`M 0 ${W} A ${W} ${W} 0 0 1 ${SOFT_RIGHT_ENDPOINT.X} ${SOFT_RIGHT_ENDPOINT.Y} L ${W} ${W} Z`} />
  };

  return (
    //<div className={`Square Square--${terrainType}`} style={{ top: offset.y, left: offset.x, transform: `rotate(${rotation}deg)` }}>
    <div
      className={`Square`}
      style={{
        top: offset.y,
        left: offset.x
      }}
    >
      {svgElement}
    </div>
  );
};

export default Square;