import { useEffect, useState } from 'react';
import { DEFAULT_SPRINTER_DECK, DEFAULT_ROULEUR_DECK } from '../consts';
import { CardObject } from '../types';
import Hand from '../hand/Hand';
import './App.css';


const App = () => {
  const [sprinterDeck, setSprinterDeck] = useState<CardObject[]>(DEFAULT_SPRINTER_DECK);
  const [rouleurDeck, setRouleurDeck] = useState<CardObject[]>(DEFAULT_ROULEUR_DECK);

  const handleCardClick = (value: number) => {
    console.log(value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Red Flag</h1>
      </header>
      <main className="App-main">
        <Hand cards={sprinterDeck.slice(0, 4)} handleCardClick={handleCardClick} />
        <Hand cards={rouleurDeck.slice(0, 4)} handleCardClick={handleCardClick} />
      </main>
    </div>
  );
};

export default App;
