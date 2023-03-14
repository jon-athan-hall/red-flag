import { CardType, PlayerCards } from '../card/card-types';
import CardBack from '../card/card-back';
import Hand from '../hand/hand';
import Played from '../played/played';
import './tableau.css';

type TableauProps = {
  playerCards: PlayerCards;
  buttonText: string;
  handleCardSelection: (type: CardType, index: number) => void;
  handleButtonClick?: () => void;
};

const Tableau = ({ playerCards, buttonText, handleCardSelection, handleButtonClick }: TableauProps): JSX.Element => {
  return (
    <section className="Tableau">
      <Played cards={playerCards[CardType.SPRINTEUR].played} />
      <Hand cards={playerCards[CardType.SPRINTEUR].hand} handleCardSelection={handleCardSelection} />
      <CardBack type={CardType.SPRINTEUR} />
      <button className="Tableau-button" onClick={() => handleButtonClick?.()}>{buttonText}</button>
      <CardBack type={CardType.ROULEUR} />
      <Hand cards={playerCards[CardType.ROULEUR].hand} handleCardSelection={handleCardSelection} />
      <Played cards={playerCards[CardType.ROULEUR].played} />
    </section>
  );
};

export default Tableau;
