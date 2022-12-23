import { CardType, PlayerCards } from '../card/card-types';
import CardBack from '../card/card-back';
import Hand from '../hand/hand';
import Played from '../played/played';
import './tableau.css';

type TableauProps = {
  playerCards: PlayerCards;
  handleCardClick(value: number): void;
  handleDeckClick(type: CardType): void;
};

const Tableau = ({ playerCards, handleCardClick, handleDeckClick }: TableauProps): JSX.Element => {
  return (
    <section className="Tableau">
      <Played cards={playerCards[CardType.SPRINTEUR].played} />
      <Hand cards={playerCards[CardType.SPRINTEUR].hand} handleCardClick={handleCardClick} />
      <CardBack type={CardType.SPRINTEUR} handleClick={handleDeckClick} />
      <CardBack type={CardType.ROULEUR} handleClick={handleDeckClick} />
      <Hand cards={playerCards[CardType.ROULEUR].hand} handleCardClick={handleCardClick} />
      <Played cards={playerCards[CardType.ROULEUR].played} />
    </section>
  );
};

export default Tableau;
