import React from "react";
import Card from "../Card/Card";
import "./cards_container.css";

export default function CardsContainer({ cards }) {
  return (
    <div className="cards-container">
      {cards.map((card, index) => (
        <Card key={index} index={index + 1} question={card.question} answer={card.answer} />
      ))}
    </div>
  );
}
