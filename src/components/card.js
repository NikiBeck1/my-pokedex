import React from 'react';

function Card({ cards }) {
  return (
    <div className="card">
      {cards.map((card) => (
        <li key={card.id}>
          <img src={card.img} alt={card.name} />
          {card.name}
          <p>{card.num}</p>
          <p>{card.type?.join(', ')}</p>
          <p>{card.weaknesses?.join(', ')}</p>
        </li>
      ))}
    </div>
  );
}

export default Card;
