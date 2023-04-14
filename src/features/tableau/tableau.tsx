// Import dependencies from project files.
import CardBack from '../card/card-back';
import Hand from '../hand/hand';

// Import types.
import { PlayerSelections } from '../app/app-types';
import { CardType, PlayerCards } from '../card/card-types';

// Import styles.
import './tableau.css';

type TableauProps = {
  playerCards: PlayerCards;
  confirmCards: Function;
  drawCards: Function;
  handleCardSelection: (type: CardType, index: number) => void;
  playerSelections: PlayerSelections;
};

const Tableau = ({
  confirmCards,
  drawCards,
  handleCardSelection,
  playerCards,
  playerSelections
}: TableauProps): JSX.Element => {
  // Useful flag for enabling/disabling buttons.
  const fullHands: boolean = (playerCards[CardType.ROULEUR].hand.length > 0) && (playerCards[CardType.SPRINTER].hand.length > 0);

  return (
    <section className="Tableau">
      <Hand
       cards={playerCards[CardType.ROULEUR].hand}
       handleCardSelection={handleCardSelection}
       selectedCardIndex={playerSelections[CardType.ROULEUR]}
      />
      <CardBack type={CardType.ROULEUR} />

      <div className="Tableau__buttons">
        <button className="Tableau__button" disabled={fullHands} onClick={() => drawCards()}>Draw cards</button>
        <button className="Tableau__button" disabled={!fullHands} onClick={() => confirmCards()}>Confirm cards</button>
      </div>

      <CardBack type={CardType.SPRINTER} />
      <Hand
        cards={playerCards[CardType.SPRINTER].hand}
        handleCardSelection={handleCardSelection}
        selectedCardIndex={playerSelections[CardType.SPRINTER]}
      />
    </section>
  );
};

export default Tableau;