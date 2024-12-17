import React from "react";

function Card({ card, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      {card}
    </div>
  );
}

export default Card;
