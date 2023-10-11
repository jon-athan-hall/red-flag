import { TileType, TerrainType, SquareObject } from '../features/square/square-types';

type TrackTile = {
  [key: string]: SquareObject[];
};

export const SQUARE_SIZE = 24;

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
  'c': [
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
  'C': [
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
      terrainType: TerrainType.ASCENT
    },
    {
      tileType: TileType.STRAIGHT,
      terrainType: TerrainType.ASCENT
    },
    {
      tileType: TileType.STRAIGHT,
      terrainType: TerrainType.ASCENT
    }
  ],
  'd': [
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
  'D': [
    {
      tileType: TileType.STRAIGHT,
      terrainType: TerrainType.ASCENT
    },
    {
      tileType: TileType.STRAIGHT,
      terrainType: TerrainType.ASCENT
    },
    {
      tileType: TileType.STRAIGHT,
      terrainType: TerrainType.ASCENT
    },
    {
      tileType: TileType.STRAIGHT,
      terrainType: TerrainType.ASCENT
    },
    {
      tileType: TileType.STRAIGHT,
      terrainType: TerrainType.ASCENT
    },
    {
      tileType: TileType.STRAIGHT,
      terrainType: TerrainType.DESCENT
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
      terrainType: TerrainType.ASCENT
    }
  ],
  'f': [
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
  'F': [
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
    },
    {
      tileType: TileType.STRAIGHT,
      terrainType: TerrainType.DEFAULT
    }
  ],
  'g': [
    {
      tileType: TileType.SHARP_LEFT,
      terrainType: TerrainType.DEFAULT
    },
    {
      tileType: TileType.SHARP_LEFT,
      terrainType: TerrainType.DEFAULT
    }
  ],
  'G': [
    {
      tileType: TileType.SHARP_RIGHT,
      terrainType: TerrainType.ASCENT
    },
    {
      tileType: TileType.SHARP_RIGHT,
      terrainType: TerrainType.ASCENT
    }
  ],
  'h': [
    {
      tileType: TileType.SOFT_LEFT,
      terrainType: TerrainType.DEFAULT
    },
    {
      tileType: TileType.SOFT_LEFT,
      terrainType: TerrainType.DEFAULT
    }
  ],
  'H': [
    {
      tileType: TileType.SOFT_RIGHT,
      terrainType: TerrainType.DESCENT
    },
    {
      tileType: TileType.SOFT_RIGHT,
      terrainType: TerrainType.DESCENT
    }
  ],
  'i': [
    {
      tileType: TileType.SHARP_LEFT,
      terrainType: TerrainType.DEFAULT
    },
    {
      tileType: TileType.SHARP_LEFT,
      terrainType: TerrainType.DEFAULT
    }
  ],
  'I': [
    {
      tileType: TileType.SHARP_RIGHT,
      terrainType: TerrainType.DEFAULT
    },
    {
      tileType: TileType.SHARP_RIGHT,
      terrainType: TerrainType.DEFAULT
    }
  ],
  'j': [
    {
      tileType: TileType.SHARP_RIGHT,
      terrainType: TerrainType.DEFAULT
    },
    {
      tileType: TileType.SHARP_RIGHT,
      terrainType: TerrainType.DEFAULT
    }
  ],
  'J': [
    {
      tileType: TileType.SHARP_LEFT,
      terrainType: TerrainType.DEFAULT
    },
    {
      tileType: TileType.SHARP_LEFT,
      terrainType: TerrainType.DEFAULT
    }
  ],
  'k': [
    {
      tileType: TileType.SOFT_RIGHT,
      terrainType: TerrainType.DEFAULT
    },
    {
      tileType: TileType.SOFT_RIGHT,
      terrainType: TerrainType.DEFAULT
    }
  ],
  'K': [
    {
      tileType: TileType.SOFT_LEFT,
      terrainType: TerrainType.ASCENT
    },
    {
      tileType: TileType.SOFT_LEFT,
      terrainType: TerrainType.ASCENT
    }
  ],
  'l': [
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
  'L': [
    {
      tileType: TileType.STRAIGHT,
      terrainType: TerrainType.ASCENT
    },
    {
      tileType: TileType.STRAIGHT,
      terrainType: TerrainType.ASCENT
    },
    {
      tileType: TileType.STRAIGHT,
      terrainType: TerrainType.ASCENT
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
    }
  ],
  'm': [
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
  'M': [
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
      terrainType: TerrainType.ASCENT
    },
    {
      tileType: TileType.STRAIGHT,
      terrainType: TerrainType.ASCENT
    },
    {
      tileType: TileType.STRAIGHT,
      terrainType: TerrainType.ASCENT
    },
    {
      tileType: TileType.STRAIGHT,
      terrainType: TerrainType.ASCENT
    }
  ],
  'n': [
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
  'N': [
    {
      tileType: TileType.STRAIGHT,
      terrainType: TerrainType.ASCENT
    },
    {
      tileType: TileType.STRAIGHT,
      terrainType: TerrainType.ASCENT
    },
    {
      tileType: TileType.STRAIGHT,
      terrainType: TerrainType.ASCENT
    },
    {
      tileType: TileType.STRAIGHT,
      terrainType: TerrainType.ASCENT
    },
    {
      tileType: TileType.STRAIGHT,
      terrainType: TerrainType.ASCENT
    },
    {
      tileType: TileType.STRAIGHT,
      terrainType: TerrainType.ASCENT
    }
  ],
  'o': [
    {
      tileType: TileType.SHARP_RIGHT,
      terrainType: TerrainType.DEFAULT
    },
    {
      tileType: TileType.SHARP_RIGHT,
      terrainType: TerrainType.DEFAULT
    }
  ],
  'O': [
    {
      tileType: TileType.SHARP_LEFT,
      terrainType: TerrainType.ASCENT
    },
    {
      tileType: TileType.SHARP_LEFT,
      terrainType: TerrainType.ASCENT
    }
  ],
  'p': [
    {
      tileType: TileType.SHARP_RIGHT,
      terrainType: TerrainType.DEFAULT
    },
    {
      tileType: TileType.SHARP_RIGHT,
      terrainType: TerrainType.DEFAULT
    }
  ],
  'P': [
    {
      tileType: TileType.SHARP_LEFT,
      terrainType: TerrainType.DESCENT
    },
    {
      tileType: TileType.SHARP_LEFT,
      terrainType: TerrainType.DESCENT
    }
  ],
  'q': [
    {
      tileType: TileType.SOFT_LEFT,
      terrainType: TerrainType.DEFAULT
    },
    {
      tileType: TileType.SOFT_LEFT,
      terrainType: TerrainType.DEFAULT
    }
  ],
  'Q': [
    {
      tileType: TileType.SOFT_RIGHT,
      terrainType: TerrainType.ASCENT
    },
    {
      tileType: TileType.SOFT_RIGHT,
      terrainType: TerrainType.ASCENT
    }
  ],
  'r': [
    {
      tileType: TileType.SOFT_RIGHT,
      terrainType: TerrainType.DEFAULT
    },
    {
      tileType: TileType.SOFT_RIGHT,
      terrainType: TerrainType.DEFAULT
    }
  ],
  'R': [
    {
      tileType: TileType.SOFT_LEFT,
      terrainType: TerrainType.ASCENT
    },
    {
      tileType: TileType.SOFT_LEFT,
      terrainType: TerrainType.ASCENT
    }
  ],
  's': [
    {
      tileType: TileType.SOFT_RIGHT,
      terrainType: TerrainType.DEFAULT
    },
    {
      tileType: TileType.SOFT_RIGHT,
      terrainType: TerrainType.DEFAULT
    }
  ],
  'S': [
    {
      tileType: TileType.SOFT_LEFT,
      terrainType: TerrainType.DEFAULT
    },
    {
      tileType: TileType.SOFT_LEFT,
      terrainType: TerrainType.DEFAULT
    }
  ],
  't': [
    {
      tileType: TileType.SOFT_LEFT,
      terrainType: TerrainType.DEFAULT
    },
    {
      tileType: TileType.SOFT_LEFT,
      terrainType: TerrainType.DEFAULT
    }
  ],
  'T': [
    {
      tileType: TileType.SOFT_RIGHT,
      terrainType: TerrainType.DEFAULT
    },
    {
      tileType: TileType.SOFT_RIGHT,
      terrainType: TerrainType.DEFAULT
    }
  ],
  'u': [
    {
      tileType: TileType.STRAIGHT,
      terrainType: TerrainType.DEFAULT
    },
    {
      tileType: TileType.STRAIGHT,
      terrainType: TerrainType.FINISH
    },
    {
      tileType: TileType.STRAIGHT,
      terrainType: TerrainType.FINISH
    },
    {
      tileType: TileType.STRAIGHT,
      terrainType: TerrainType.FINISH
    },
    {
      tileType: TileType.STRAIGHT,
      terrainType: TerrainType.FINISH
    },
    {
      tileType: TileType.STRAIGHT,
      terrainType: TerrainType.FINISH
    }
  ],
  'U': [
    {
      tileType: TileType.STRAIGHT,
      terrainType: TerrainType.ASCENT
    },
    {
      tileType: TileType.STRAIGHT,
      terrainType: TerrainType.ASCENT
    },
    {
      tileType: TileType.STRAIGHT,
      terrainType: TerrainType.FINISH
    },
    {
      tileType: TileType.STRAIGHT,
      terrainType: TerrainType.FINISH
    },
    {
      tileType: TileType.STRAIGHT,
      terrainType: TerrainType.FINISH
    },
    {
      tileType: TileType.STRAIGHT,
      terrainType: TerrainType.FINISH
    }
  ]
}