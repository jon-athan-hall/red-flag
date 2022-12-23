import { useState } from 'react';
import { DEFAULT_SPRINTEUR_DECK, DEFAULT_ROULEUR_DECK } from '../consts';
import {
  CardType,
  PlayerCards,
} from '../card/card-types';
import { shuffle } from '../utils';
import Hand from '../hand/hand';
import CardBack from '../card/card-back';
import './app.css';

const App = () => {
  const [playerCards, setPlayerCards] = useState<PlayerCards>({
    [CardType.SPRINTEUR]: {
      deck: shuffle(DEFAULT_SPRINTEUR_DECK),
      discard: [],
      played: [],
      hand: []
    },
    [CardType.ROULEUR]: {
      deck: shuffle(DEFAULT_ROULEUR_DECK),
      discard: [],
      played: [],
      hand: []
    }
  })

  const handleCardClick = (value: number) => {
    console.log(value);
  }

  const handleDeckClick = (type: CardType) => {
    /**
     * Clone the deck Array with Array.from or spread operator.
     * Using the = syntax copies by reference, so React doesn't see
     * any changes when setCards is called.
     */

    console.log(type);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Red Flag</h1>
        <a href="http://strongholdgames.com/our-games/flamme-rouge/" target="_blank">Buy the game</a>
      </header>

      <main className="App-main">
        <section className="App-hands">
          <Hand cards={playerCards[CardType.SPRINTEUR].hand} handleCardClick={handleCardClick} />
          <CardBack type={CardType.SPRINTEUR} handleClick={handleDeckClick} />
          <CardBack type={CardType.ROULEUR} handleClick={handleDeckClick} />
          <Hand cards={playerCards[CardType.ROULEUR].hand} handleCardClick={handleCardClick} />
        </section>
      </main>
    </div>
  );
};

export default App;
