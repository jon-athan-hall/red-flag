import { useState } from 'react';
import { CardObject, CardType } from '../card/card-types';
import Card from '../card/card';
import './hand.css';

interface HandProps {
  cards: CardObject[],
  handleCardConfirmation(type: CardType, value: number): void
};

const Hand = ({ cards, handleCardConfirmation }: HandProps): JSX.Element => {
  // Keep track of which card has been temporarily selected.
  const [ currentCardIndex, setCurrentCardIndex ] = useState<number | null>(null);

  const handleCardClick = (type: CardType, index: number) => {
    // If the temporarily selected card is clicked again, trigger confirmation.
    if (index === currentCardIndex) {
      handleCardConfirmation(type, currentCardIndex);
    } else {
      setCurrentCardIndex(index);
    }
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
