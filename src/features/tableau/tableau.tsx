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
      <Hand cards={playerCards[CardType.ROULEUR].hand} handleCardSelection={handleCardSelection} />
      <CardBack type={CardType.ROULEUR} />

      <div className="Tableau__buttons">
        <button className="Tableau__button" onClick={() => drawCards()}>Draw cards</button>
        <button className="Tableau__button" onClick={() => confirmCards()}>Confirm cards</button>
      </div>

      <CardBack type={CardType.SPRINTER} />
      <Hand cards={playerCards[CardType.SPRINTER].hand} handleCardSelection={handleCardSelection} />
    </section>
  );
};

export default Tableau;