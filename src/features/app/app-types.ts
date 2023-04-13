import { CardType } from '../card/card-types';

export type PlayerSelections = {
  [key in CardType]: number | null;
};