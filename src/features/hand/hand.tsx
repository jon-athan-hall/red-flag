import { useState } from 'react';
import { CardObject, CardType } from '../card/card-types';
import Card from '../card/card';
import './hand.css';

interface HandProps {
  cards: CardObject[],
  handleCardSelection(type: CardType, value: number): void
};

const Hand = ({ cards, handleCardSelection }: HandProps): JSX.Element => {
  // Keep track of which card has been temporarily selected.
  const [ currentCardIndex, setCurrentCardIndex ] = useState<number | null>(null);

  const handleCardClick = (type: CardType, index: number) => {
    handleCardSelection(type, index);
    setCurrentCardIndex(index);
  };

  return (
    <div className="Hand">
      {cards.map((card, index) => (
        <Card
          key={index}
          value={card.value}
          type={card.type}
          handleClick={() => handleCardClick(card.type, index)}
          current={index === currentCardIndex}
        />
      ))}
    </div>
  )
};

export default Hand;