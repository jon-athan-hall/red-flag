import { useState } from 'react';
import { DEFAULT_SPRINTEUR_DECK, DEFAULT_ROULEUR_DECK } from '../consts';
import {
  CardType,
  PlayerCards,
} from '../card/card-types';
import { shuffle } from '../utils';
import Tableau from '../tableau/tableau';
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
    // Clone the deck Array with Array.from or spread operator.
    let newDeck = Array.from(playerCards[type].deck);

    // Combine the old hand and the discard into a new discard.
    let newDiscard = [...playerCards[type].discard, ...playerCards[type].hand];

    // Blank hand to be built.
    let newHand = [];

    // Draw a new hand.
    while (newHand.length < 4) {
      // Shuffle up the discard, if there are no more deck cards to draw.
      if (newDeck.length === 0) {
        newDeck = shuffle(newDiscard);
        newDiscard = [];
      }

      let card = newDeck.pop();
      newHand.push(card);
    }

    setPlayerCards({
      ...playerCards,
      [type]: {
        ...playerCards[type],
        deck: newDeck,
        discard: newDiscard,
        hand: newHand
      }
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Red Flag</h1>
        <a href="http://strongholdgames.com/our-games/flamme-rouge/" target="_blank">Buy the game</a>
      </header>

      <main className="App-main">
        <Tableau playerCards={playerCards} handleCardClick={handleCardClick} handleDeckClick={handleDeckClick} />
      </main>
    </div>
  );
};

export default App;
