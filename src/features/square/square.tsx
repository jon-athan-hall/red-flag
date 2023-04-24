import { TerrainType, TileType, SquareObject } from './square-types';
import Lane from '../lane/lane';
import './square.css';

interface SquareProps extends SquareObject {
};

const SIZE = 50;

const Square = ({ terrainType = TerrainType.DEFAULT, tileType }: SquareProps): JSX.Element => {
  let shapes = [];

  switch (tileType) {
    case TileType.STRAIGHT:
      shapes.push(<rect x="1" y="0" width="48" height={`${SIZE}`} />);
      shapes.push(<path d={`M 0 ${SIZE} L 0 0 M ${SIZE} ${SIZE} L ${SIZE} 0`} />);
      shapes.push(<path d={`M ${SIZE / 2} ${SIZE} L ${SIZE / 2} 0`} />);
      break;
    case TileType.SHARP_RIGHT:
      shapes.push(<path d={`M 0 ${SIZE} A ${SIZE} ${SIZE} 0 0 1 ${SIZE - (SIZE * Math.sin(Math.PI / 4))} ${SIZE - (SIZE * Math.cos(Math.PI / 4))} L ${SIZE} ${SIZE} Z`} />);
  };



      /*
        <path
          d="M 0 50 A 50 50 0 0 1 50 0 L 50 50 Z"
          fill="blue"
          stroke="black"
          strokeWidth="2"
        />
        */
  return (
    <div className={`Square Square--${terrainType}`}>
      <svg height="50" width="50">
        {shapes.map(path => path)}
      </svg>
    </div>
  );
};

export default Square;