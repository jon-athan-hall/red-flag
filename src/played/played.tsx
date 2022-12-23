import { CardObject } from '../card/card-types';
import Card from '../card/card';

interface PlayedProps {
  cards: CardObject[],
};

const Played = ({ cards }: PlayedProps): JSX.Element => {
  return (
    <div className="Played">
      {cards.map((card, index) => (
        <Card key={index} value={card.value} type={card.type} />
      ))}
    </div>
  );
};

export default Played;
