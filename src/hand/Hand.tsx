import { CardObject } from '../card/card-types';
import Card from '../card/card';
import './hand.css';

interface HandProps {
  cards: CardObject[],
  handleCardClick(value: number): void
};

const Hand = ({ cards, handleCardClick }: HandProps): JSX.Element => {
  return (
    <div className="Hand">
      {cards.map((card, index) => (
        <Card key={index} value={card.value} type={card.type} handleClick={handleCardClick} />
      ))}
    </div>
  )
};

export default Hand;
