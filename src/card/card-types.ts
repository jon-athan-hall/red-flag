export enum CardType {
  SPRINTEUR = 'sprinteur',
  ROULEUR = 'rouleur'
};

export interface CardObject {
  value: number,
  type: CardType
};

export type PlayerCards = {
  [key in CardType]: {
    deck: CardObject[];
    discard: CardObject[];
    played: CardObject[];
    hand: CardObject[];
  }
};
