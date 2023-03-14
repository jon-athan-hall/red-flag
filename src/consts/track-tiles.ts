import { TileType, TerrainType, SquareObject } from '../square/square-types';

type TrackTile = {
  [key: string]: SquareObject[];
};

export const TRACK_TILES: TrackTile  = {
  'a': [
    {
      tileType: TileType.STRAIGHT,
      terrainType: TerrainType.START
    },
    {
      tileType: TileType.STRAIGHT,
      terrainType: TerrainType.START
    },
    {
      tileType: TileType.STRAIGHT,
      terrainType: TerrainType.START
    },
    {
      tileType: TileType.STRAIGHT,
      terrainType: TerrainType.START
    },
    {
      tileType: TileType.STRAIGHT,
      terrainType: TerrainType.START
    },
    {
      tileType: TileType.STRAIGHT,
      terrainType: TerrainType.DEFAULT
    }
  ],
  'A': [
    {
      tileType: TileType.STRAIGHT,
      terrainType: TerrainType.START
    },
    {
      tileType: TileType.STRAIGHT,
      terrainType: TerrainType.START
    },
    {
      tileType: TileType.STRAIGHT,
      terrainType: TerrainType.START
    },
    {
      tileType: TileType.STRAIGHT,
      terrainType: TerrainType.START
    },
    {
      tileType: TileType.STRAIGHT,
      terrainType: TerrainType.DEFAULT
    },
    {
      tileType: TileType.STRAIGHT,
      terrainType: TerrainType.DEFAULT
    }
  ],
  'b': [
    {
      tileType: TileType.STRAIGHT,
      terrainType: TerrainType.DEFAULT
    },
    {
      tileType: TileType.STRAIGHT,
      terrainType: TerrainType.DEFAULT
    },
    {
      tileType: TileType.STRAIGHT,
      terrainType: TerrainType.DEFAULT
    },
    {
      tileType: TileType.STRAIGHT,
      terrainType: TerrainType.DEFAULT
    },
    {
      tileType: TileType.STRAIGHT,
      terrainType: TerrainType.DEFAULT
    },
    {
      tileType: TileType.STRAIGHT,
      terrainType: TerrainType.DEFAULT
    }
  ],
  'B': [
    {
      tileType: TileType.STRAIGHT,
      terrainType: TerrainType.DESCENT
    },
    {
      tileType: TileType.STRAIGHT,
      terrainType: TerrainType.DESCENT
    },
    {
      tileType: TileType.STRAIGHT,
      terrainType: TerrainType.DESCENT
    },
    {
      tileType: TileType.STRAIGHT,
      terrainType: TerrainType.DESCENT
    },
    {
      tileType: TileType.STRAIGHT,
      terrainType: TerrainType.DEFAULT
    },
    {
      tileType: TileType.STRAIGHT,
      terrainType: TerrainType.DEFAULT
    }
  ],
  'e': [
    {
      tileType: TileType.SHARP_LEFT,
      terrainType: TerrainType.DEFAULT
    },
    {
      tileType: TileType.SHARP_LEFT,
      terrainType: TerrainType.DEFAULT
    }
  ],
  'E': [
    {
      tileType: TileType.SHARP_RIGHT,
      terrainType: TerrainType.ASCENT
    },
    {
      tileType: TileType.SHARP_RIGHT,
      terrainType: TerrainType.DESCENT
    }
  ],
}