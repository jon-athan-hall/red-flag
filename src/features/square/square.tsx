import { TerrainType, TileType, SquareObject } from './square-types';
import './square.css';

interface SquareProps extends SquareObject {
};

/**
 * Numerical constants used to create different svg paths calculated
 * here instead of within the component.
 */
const W = 50;
const SHARP_RIGHT_ENDPOINT = {
  X: W - (W * Math.cos(Math.PI / 4)),
  Y: W - (W * Math.sin(Math.PI / 4))
};
const SHARP_LEFT_ENDPOINT = {
  X: W * Math.cos(Math.PI / 4),
  Y: W - (W * Math.sin(Math.PI / 4))
};
const SOFT_RIGHT_ENDPOINT = {
  X: W - (W * Math.cos(Math.PI / 8)),
  Y: W - (W * Math.sin(Math.PI / 8))
};
const SOFT_LEFT_ENDPOINT = {
  X: W * Math.cos(Math.PI / 8),
  Y: W - (W * Math.sin(Math.PI / 8))
};

const Square = ({ terrainType = TerrainType.DEFAULT, tileType }: SquareProps): JSX.Element => {
  let svgElement;

  switch (tileType) {
    case TileType.STRAIGHT:
      svgElement =
        <svg height={W} width={W}>
          <rect x="1" y="0" width="48" height={`${W}`} />
          <path d={`M 0 ${W} L 0 0 M ${W} ${W} L ${W} 0`} />
          <path d={`M ${W / 2} ${W} L ${W / 2} 0`} />
        </svg>;
      break;
    case TileType.SHARP_RIGHT:
      svgElement =
        <svg height={W} width={W}>
          <path d={`M 0 ${W} A ${W} ${W} 0 0 1 ${SHARP_RIGHT_ENDPOINT.X} ${SHARP_RIGHT_ENDPOINT.Y} L ${W} ${W} Z`} />
        </svg>;
      break;
    case TileType.SHARP_LEFT:
      svgElement =
        <svg height={W} width={W}>
          <path d={`M ${W} ${W} A ${W} ${W} 0 0 0 ${SHARP_LEFT_ENDPOINT.X} ${SHARP_LEFT_ENDPOINT.Y} L 0 ${50} Z`} />
        </svg>;
      break;
    case TileType.SOFT_RIGHT:
      svgElement =
        <svg height={W} width={W}>
          <path d={`M 0 ${W} A ${W} ${W} 0 0 1 ${SOFT_RIGHT_ENDPOINT.X} ${SOFT_RIGHT_ENDPOINT.Y} L ${W} ${W} Z`} />
        </svg>;
      break;
    case TileType.SOFT_LEFT:
      svgElement =
        <svg height={W} width={W}>
          <path d={`M ${W} ${W} A ${W} ${W} 0 0 0 ${SOFT_LEFT_ENDPOINT.X} ${SOFT_LEFT_ENDPOINT.Y} L 0 ${50} Z`} />
        </svg>;
      break;
  };

  return (
    <div className={`Square Square--${terrainType}`}>
      {svgElement}
    </div>
  );
};

export default Square;