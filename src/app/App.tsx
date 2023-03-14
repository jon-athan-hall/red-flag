import { useEffect, useState } from 'react';
import { DEFAULT_SPRINTEUR_DECK, DEFAULT_ROULEUR_DECK } from '../consts/decks';
import { CardType, PlayerCards } from '../card/card-types';
import { PlayerSelections } from './app-types';
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
  });

  const [playerSelections, setPlayerSelections] = useState<PlayerSelections>({
    [CardType.SPRINTEUR]: null,
    [CardType.ROULEUR]: null
  });

  const [buttonText, setButtonText] = useState<string>('Draw cards');
  const [handleButtonClick, setHandleButtonClick] = useState(() => () => drawHands());

  const drawHands = () => {
    let newPlayerCards: PlayerCards = playerCards;

    for (const type of Object.values(CardType)) {
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

        /**
         * Still have to make sure there is a card to draw. Near the end of
         * the game, it's possible a hand will be less than 4 cards.
         */ 
        let card = newDeck.pop();

        if (card === undefined) {
          break;
        } else {
          newHand.push(card);
        }
      }

      newPlayerCards[type] = {
        ...playerCards[type],
        deck: newDeck,
        discard: newDiscard,
        hand: newHand
      }
    }

    setPlayerCards(newPlayerCards);
    setButtonText('Confirm cards');
  };

  /**
   * When the player clicks on a card in either their sprinteur or rouleur
   * hand, update that selection with the index (not the value) of that
   * card in the respective hand.
   */
  const handleCardSelection = (type: CardType, index: number) => {
    setPlayerSelections({
      ...playerSelections,
      [type]: index
    });
  };

  /**
   * The player must hit a confirmation button once a card has been selected
   * from both the sprinteur and rouleur hands. As long as a card from each
   * has been selected, go forward with moving the bicycles, and update the
   * player cards.
   */
  const handleConfirmation = () => {
    if (playerSelections[CardType.SPRINTEUR] === null || playerSelections[CardType.ROULEUR] === null) {
      console.log('MUST SELECT BOTH');
      return;
    }

    console.log('CONFIRMED');
    console.log('sprinteur card:', playerCards[CardType.SPRINTEUR].hand[playerSelections[CardType.SPRINTEUR]]);
    console.log('rouleur card:', playerCards[CardType.ROULEUR].hand[playerSelections[CardType.ROULEUR]]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Red Flag</h1>
        <a href="http://strongholdgames.com/our-games/flamme-rouge/" target="_blank">Buy the game</a>
      </header>

      <main className="App-main">
        <Tableau
          playerCards={playerCards}
          buttonText={buttonText}
          handleButtonClick={handleButtonClick}
          handleCardSelection={handleCardSelection}
        />
      </main>
    </div>
  );
};

export default App;
