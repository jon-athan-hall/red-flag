import { TerrainType, TileType, SquareObject } from './square-types';
import Lane from '../lane/lane';
import './square.css';

interface SquareProps extends SquareObject {
  offsetX: number;
  offsetY: number;
  rotation: number;
};

const Square = ({ offsetX, offsetY, rotation, tileType, terrainType = TerrainType.DEFAULT }: SquareProps): JSX.Element => {

  return (
    <div className={`Square Square--${terrainType}`} style={{ left: offsetX, bottom: offsetY, transform: `rotate(${rotation}deg)` }}>
      <Lane />
      <Lane />
    </div>
  );
};

export default Square;
