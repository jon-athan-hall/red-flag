// Import dependencies from project files.
import Card from '../card/card';

// Import types.
import { CardObject } from '../card/card-types';

// Import styles.
import './played.css';

interface PlayedProps {
  cards: CardObject[],
};

/**
 * Component for displaying a list of cards already played during the game.
 * @param {PlayedProps}
 * @returns {JSX.Element}
 */
const Played = ({ cards }: PlayedProps): JSX.Element => {
  return (
    <div className="Played">
      {cards.map((card, index) => (
        <Card key={index} value={card.value} type={card.type} style={{ marginTop: `calc(${index} * 0.25em)` }} />
      ))}
    </div>
  );
};

export default Played;