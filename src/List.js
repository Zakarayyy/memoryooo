import React, { useState } from "react";
import Card from "./card";

function List() {
  const cards = ["🍎", "🍌", "🍇", "🍊", "🍎", "🍌", "🍇", "🍊"];
  const [flipCarte, setFlipCarte] = useState([]);
  const [matchcarte, setMatchCarte] = useState([]);

  const Carteselec = (index) => {
    if (!flipCarte.includes(index)) {
      setFlipCarte([...flipCarte, index]);
    }
  };

  
  return (
    <div className="memory-game">
      {cards.map((card, index) => (
        <Card
          key={index}
          card={flipCarte.includes(index) ? card : "❓"}
          onClick={() => Carteselec(index)}
        />
      ))}
    </div>
  );
}

export default List;