import { TerrainType, TileType, SquareObject } from './square-types';
import Lane from '../lane/lane';
import './square.css';

interface SquareProps extends SquareObject {
};

const Square = ({ terrainType = TerrainType.DEFAULT, tileType }: SquareProps): JSX.Element => {
  let shapes = [];

  if (tileType === TileType.STRAIGHT) {
    shapes.push(<rect x="1" y="0" width="48" height="50" className={`Terrain--${terrainType}`} />);
    shapes.push(<path d="M 0 50 L 0 0 M 50 50 L 50 0" stroke="black" strokeWidth={1} />);
    shapes.push(<path d="M 25 50 L 25 0" stroke="black" strokeWidth={1} />);
  }


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
      <svg height="50" width="50" viewBox="0 0 50 50">
        {shapes.map(path => path)}
      </svg>
    </div>
  );
};

export default Square;