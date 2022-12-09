import { useState } from 'react';
import { DEFAULT_SPRINTER_DECK, DEFAULT_ROULEUR_DECK } from '../consts';
import { CardType } from '../types';
import { shuffle } from '../utils';
import Hand from '../hand/hand';
import CardBack from '../card/card-back';
import './app.css';


const App = () => {
  const [sprinterCards, setSprinterCards] = useState({
    deck: shuffle(DEFAULT_SPRINTER_DECK),
    discard: [],
    played: [],
    hand: []
  });

  const [rouleurCards, setRouleurCards] = useState({
    deck: shuffle(DEFAULT_ROULEUR_DECK),
    discard: [],
    played: [],
    hand: []
  });

  const handleCardClick = (value: number) => {
    console.log(value);
  }

  const handleDeckClick = (type: CardType) => {
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
          <Hand cards={sprinterCards.hand} handleCardClick={handleCardClick} />
          <CardBack type="sprinter" handleClick={handleDeckClick} />
          <CardBack type="rouleur" handleClick={handleDeckClick} />
          <Hand cards={rouleurCards.hand} handleCardClick={handleCardClick} />
        </section>
      </main>
    </div>
  );
};

export default App;
