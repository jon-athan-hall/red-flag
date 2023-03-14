export enum TileType {
  STRAIGHT = 'straight',
  SOFT_LEFT = 'soft-left',
  SOFT_RIGHT = 'soft-right',
  SHARP_LEFT = 'sharp-left',
  SHARP_RIGHT = 'sharp-right'
};

export enum TerrainType {
  DEFAULT = 'default',
  START = 'start',
  FINISH = 'finish',
  ASCENT = 'ascent',
  DESCENT = 'descent',
};

export interface SquareObject {
  tileType: TileType;
  terrainType: TerrainType
}
