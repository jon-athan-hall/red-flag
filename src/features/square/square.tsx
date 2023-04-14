import { TileType, TerrainType, SquareObject } from './square-types';
import Lane from '../lane/lane';
import './square.css';

interface SquareProps extends SquareObject {
  offsetX: number;
  offsetY: number;
};

const Square = ({ offsetX, offsetY, tileType, terrainType = TerrainType.DEFAULT }: SquareProps): JSX.Element => {

  return (
    <div className={`Square Square--${terrainType}`} style={{ left: offsetX, top: offsetY }}>
      <Lane />
      <Lane />
    </div>
  );
};

export default Square;
