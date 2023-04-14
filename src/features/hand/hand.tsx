import { useState } from 'react';
import { CardObject, CardType } from '../card/card-types';
import Card from '../card/card';
import './hand.css';

type HandProps = {
  cards: CardObject[];
  handleCardSelection(type: CardType, value: number): void;
  selectedCardIndex: number | null;
};

const Hand = ({ cards, handleCardSelection, selectedCardIndex }: HandProps): JSX.Element => {
  return (
    <div className="Hand">
      {cards.map((card, index) => (
        <Card
          current={index === selectedCardIndex}
          handleClick={() => handleCardSelection(card.type, index)}
          key={index}
          type={card.type}
          value={card.value}
        />
      ))}
    </div>
  )
};

export default Hand;