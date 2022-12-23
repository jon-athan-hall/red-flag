import { CardType, CardObject } from './card/card-types';

const sprinteurValues = [2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 9, 9, 9];
const rouleurValues = [3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7];

export const DEFAULT_SPRINTEUR_DECK: CardObject[] = sprinteurValues.map((value) => ({
  value,
  type: CardType.SPRINTEUR
}));

export const DEFAULT_ROULEUR_DECK: CardObject[] = rouleurValues.map((value) => ({
  value,
  type: CardType.ROULEUR
}));
