import React from 'react';
import './SingleCard.css'

const Singlecard = ({ card, handleChoice }) => {

  const handleClick = () => {
    handleChoice(card)
  }

  return (
    <div>
      <div className="card">
        <img
          src={card.src} 
          className="front" 
          alt="card front" 
          onClick={handleClick} 
        />
        <img 
          src="/img/cover.png" 
          className="back" 
          alt="card back" 
        />
      </div>
    </div>
  );
}

export default Singlecard;