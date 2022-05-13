import React from "react";
import logo from "../../Assets/Images/logo.svg";

// TODO: dividir em 3 cards diferentes
function Card({ index, question, answer }) {
  const [cardState, setCardState] = React.useState("closed");

  if (cardState === "closed") {
    return (
      <div className="card closed">
        <span class="question-number">Pergunta {index}</span>
        <ion-icon onClick={() => setCardState("question")} class="md hydrated icon" name="play-outline"></ion-icon>
      </div>
    );
  }

  if (cardState === 'question') {
    return (
      <div className="card closed">
        <span class="question-number">Pergunta {index}</span>
        <ion-icon onClick={() => setCardState("answer")} class="md hydrated icon" name="play-outline"></ion-icon>
      </div>
    );
  }

  if (cardState === 'question') {
    return (
      <div className="card closed">
        <span class="question-number">Pergunta {index}</span>
        <ion-icon onClick={() => setCardState("closed")} class="md hydrated icon" name="play-outline"></ion-icon>
      </div>
    );
  }
}

function Logo() {
  return (
    <div className="logo">
      <img src={logo} alt="logo" />
      <h1 className="title">ZapRecall</h1>
    </div>
  );
}

export default function Application({ setScreen }) {
  const cards = [
    { question: "O que é JSX?", answer: "uma extensão de linguagem do JavaScript" },
    { question: "O React é __", answer: "uma biblioteca JavaScript para construção de interfaces" },
    { question: "Componentes devem iniciar com __", answer: "uma biblioteca JavaScript para construção de interfaces" },
    { question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
    { question: "O ReactDOM nos ajuda __", answer: "interagindo com a DOM para colocar componentes React na mesma" },
    { question: "Usamos o npm para __", answer: "gerenciar os pacotes necessários e suas dependências" },
    { question: "Usamos props para __", answer: "passar diferentes informações para componentes " },
    {
      question: "Usamos estado (state) para __",
      answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
    },
  ];

  return (
    <div className="application">
      <Logo />
      {cards.map((card, index) => (
        <Card key={index} index={index + 1} question={card.question} answer={card.answer} />
      ))}
    </div>
  );
}
