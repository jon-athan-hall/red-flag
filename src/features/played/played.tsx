// Import dependencies from project files.
import { capitalize } from '../../utils';
import Card from '../card/card';

// Import types.
import { CardObject, CardType } from '../card/card-types';

// Import styles.
import './played.css';

type PlayedProps = {
  cards: CardObject[];
  cardType: CardType;
};

/**
 * Component for displaying a list of cards already played during the game.
 * @param {PlayedProps}
 * @returns {JSX.Element}
 */
const Played = ({ cards, cardType }: PlayedProps): JSX.Element => {
  return (
    <div className="Played">
      <h2 className="Played__heading">Played {capitalize(cardType)} Cards</h2>
      <div className="Played__stack">
        {cards.map((card, index) => (
          <Card key={index} value={card.value} type={card.type} style={{ top: `calc(${index} * 2em)` }} />
        ))}
      </div>
    </div>
  );
};

export default Played;