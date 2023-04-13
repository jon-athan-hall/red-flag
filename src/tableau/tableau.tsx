// Import dependencies from project files.
import CardBack from '../card/card-back';
import Hand from '../hand/hand';
import Played from '../played/played';

// Import types.
import { CardType, PlayerCards } from '../card/card-types';

// Import styles.
import './tableau.css';

type TableauProps = {
  playerCards: PlayerCards;
  confirmCards: Function;
  drawCards: Function;
  handleCardSelection: (type: CardType, index: number) => void;
};

const Tableau = ({ playerCards, confirmCards, drawCards, handleCardSelection }: TableauProps): JSX.Element => {
  return (
    <section className="Tableau">
      <Played cards={playerCards[CardType.SPRINTEUR].played} />
      <Hand cards={playerCards[CardType.SPRINTEUR].hand} handleCardSelection={handleCardSelection} />
      <CardBack type={CardType.SPRINTEUR} />

      <div className="Tableau__buttons">
        <button className="Tableau__button" onClick={() => drawCards()}>Draw cards</button>
        <button className="Tableau__button" onClick={() => confirmCards()}>Confirm cards</button>
      </div>

      <CardBack type={CardType.ROULEUR} />
      <Hand cards={playerCards[CardType.ROULEUR].hand} handleCardSelection={handleCardSelection} />
      <Played cards={playerCards[CardType.ROULEUR].played} />
    </section>
  );
};

export default Tableau;