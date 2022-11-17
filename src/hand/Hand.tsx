import { CardObject } from '../types';
import Card from '../card/Card';
import './Hand.css';

interface HandProps {
  cards: CardObject[],
  handleCardClick(value: number): void
};

const Hand = ({ cards, handleCardClick }: HandProps): JSX.Element => {
  return (
    <div className="Hand">
      {cards.map((card, index) => {
        console.log(card.value);
        return (
        <Card key={index} value={card.value} type={card.type} handleClick={handleCardClick} />
      );})}
    </div>
  )
};

export default Hand;
