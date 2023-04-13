import { TileType, TerrainType, SquareObject } from './square-types';
import Lane from '../lane/lane';
import './square.css';

interface SquareProps extends SquareObject {
};

const Square = ({ tileType, terrainType = TerrainType.DEFAULT }: SquareProps): JSX.Element => {

  return (
    <div className={`Square Square--${terrainType}`}>
      <Lane />
      <Lane />
    </div>
  );
};

export default Square;
