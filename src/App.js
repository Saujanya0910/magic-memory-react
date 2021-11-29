import './App.css';
import Singlecard from './components/SingleCard';
import { useEffect, React, useState } from 'react';
import helmet from './img/helmet-1.png'
import potion from './img/potion-1.png'
import ring from './img/ring-1.png'
import scroll from './img/scroll-1.png'
import shield from './img/shield-1.png'
import sword from './img/sword-1.png'

const cardImages = [
  { "src": helmet, matched: false },
  { "src": potion, matched: false },
  { "src": ring, matched: false },
  { "src": scroll, matched: false },
  { "src": shield, matched: false },
  { "src": sword, matched: false }
]

function App() {

  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const [disabled, setDisabled] = useState(false)
  const [count, setCount] = useState(0)
  const [complete, setComplete] = useState(false)

  // shuffle cards
  const shuffleCards = () => {
    // shuffle the cards by mixing pos
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map(card => ({ ...card, id: Math.random() }))

    // clear choices and reset progress
    setChoiceOne(null)
    setChoiceTwo(null)
    setCount(0)
    setComplete(false)

    // shuffle cards and init
    setCards(shuffledCards)
    setTurns(0)
  }

  // handle choices
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  // start game automatically - shuffle and play
  useEffect(() => {
    shuffleCards()
  }, [])

  // hook to check choices
  useEffect(() => {
    if(choiceOne && choiceTwo) {
      // donot allow cards to be clicked until computations are done
      setDisabled(true)

      // if cards match
      if(choiceTwo.src === choiceOne.src) {    
        // increment score count
        setCount(prevCount => prevCount+1)

        // update cards' matching status to true
        setCards(prevCards => {
          return prevCards.map(card => {
            if(card.src === choiceOne.src) {
              return {...card, matched: true}
            }
            else {
              return card
            }
          })
        })
        
        resetTurn()
      } else {
        // reset the turn after a small delay
        setTimeout(() => resetTurn(), 700)
      }
    }

    return () => {}
  }, [choiceOne, choiceTwo])

  // hook to check game completion
  useEffect(() => {
    if(count === 6) {
      setComplete(true)
      window.scrollTo({top: 0, behavior: 'smooth'})
    }
  }, [count]);

  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
    setDisabled(false)
  }

  return (
    <div className="App">
      <h1>Magic Match</h1>

      { complete && (<p>Congratulations, you completed the game in { turns } turns! 🎉</p>)}

      <button onClick={shuffleCards}>New Game</button>

      <div className="card-grid">
        { cards.map(card => ((
          <Singlecard 
            key={card.id}
            card={card} 
            handleChoice={handleChoice}
            flipped={ card === choiceOne || card === choiceTwo || card.matched }
            disabled={disabled}
          />
        ))) }
      </div>

      <p>Turns: { turns }</p>
    </div>
  );
}

export default App;
