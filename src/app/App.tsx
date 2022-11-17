import { useEffect, useState } from 'react';
import './App.css';
import Hand from '../hand/Hand';

const App = () => {
  const [sprinterDeck, setSprinterDeck] = useState([2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 9, 9, 9]);
  const [rouleurDeck, setRouleurDeck] = useState([3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7]);

  const handleCardClick = (value: number) => {
    console.log(value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Red Flag</h1>
      </header>
      <main className="App-main">
        <Hand values={sprinterDeck.slice(0, 4)} handleCardClick={handleCardClick} />
        <Hand values={rouleurDeck.slice(0, 4)} handleCardClick={handleCardClick} />
      </main>
    </div>
  );
};

export default App;
