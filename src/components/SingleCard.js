import React from 'react';
import './SingleCard.css'
import cover from '../img/cover.png'

const Singlecard = ({ card, handleChoice, flipped, disabled }) => {

  const handleClick = () => {
    if(!disabled) {
      handleChoice(card)
    }
  }

  return (
    <div className="card">
      <div className={flipped ? 'flipped' : ''}>
        <img
          src={card.src} 
          className="front" 
          alt="card front" 
        />
        <img 
          src={cover}
          className="back" 
          alt="card back" 
          onClick={handleClick} 
        />
      </div>
    </div>
  );
}

export default Singlecard;