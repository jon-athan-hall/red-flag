import { useEffect, useState } from 'react';
import { DEFAULT_SPRINTER_DECK, DEFAULT_ROULEUR_DECK } from '../consts';
import { CardObject, CardType } from '../types';
import Hand from '../hand/Hand';
import CardBack from '../card/CardBack';
import './App.css';


const App = () => {
  const [sprinterDeck, setSprinterDeck] = useState<CardObject[]>(DEFAULT_SPRINTER_DECK);
  const [rouleurDeck, setRouleurDeck] = useState<CardObject[]>(DEFAULT_ROULEUR_DECK);

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
          <Hand cards={sprinterDeck.slice(0, 4)} handleCardClick={handleCardClick} />
          <CardBack type="sprinter" handleClick={handleDeckClick} />
          <CardBack type="rouleur" handleClick={handleDeckClick} />
          <Hand cards={rouleurDeck.slice(0, 4)} handleCardClick={handleCardClick} />
        </section>
      </main>
    </div>
  );
};

export default App;
