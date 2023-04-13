import { CardType, CardObject } from '../card/card-types';

const sprinterValues = [2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 9, 9, 9];
const rouleurValues = [3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7];

export const DEFAULT_SPRINTER_DECK: CardObject[] = sprinterValues.map((value) => ({
  value,
  type: CardType.SPRINTER
}));

export const DEFAULT_ROULEUR_DECK: CardObject[] = rouleurValues.map((value) => ({
  value,
  type: CardType.ROULEUR
}));