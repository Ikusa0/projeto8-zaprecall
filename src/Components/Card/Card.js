import React from "react";
import "./card.css";
import IconButton from "../IconButton/IconButton";

function AnswerButton({ color, setCardState, setCardColor, children }) {
  return (
    <button
      onClick={() => {
        setCardState("answered");
        setCardColor(color);
      }}
      className={`${color}-bg answer-button`}
    >
      {children}
    </button>
  );
}

function CardClosed({ questionNumber, setCardState, color }) {
  let icon;
  switch (color) {
    case "green":
      icon = "checkmark-circle";
      break;

    case "red":
      icon = "close-circle";
      break;

    case "orange":
      icon = "help-circle";
      break;

    default:
      icon = "play-outline";
      break;
  }

  return (
    <div className={`card closed ${color}`}>
      <span className={`text ${color ? "text-scratch" : ""}`}>Pergunta {questionNumber}</span>
      {setCardState ? (
        <IconButton icon={icon} execute={() => setCardState("question")} />
      ) : (
        <ion-icon class="md hydrated icon" name={icon}></ion-icon>
      )}
    </div>
  );
}

function CardQuestion({ question, setCardState }) {
  return (
    <div className="card question">
      <span className="text">{question}</span>
      <IconButton icon={"repeat-outline"} execute={() => setCardState("answer")} />
    </div>
  );
}

function CardAnswer({ setCardState, setCardColor, answer }) {
  const buttons = [
    { color: "red", text: "Não lembrei" },
    { color: "orange", text: "Quase não lembrei" },
    { color: "green", text: "Zap!" },
  ];

  return (
    <div className="card answer">
      <span className="text">{answer}</span>
      <div className="answer-button-container">
        {buttons.map(({ color, text }, index) => (
          <AnswerButton key={index} setCardState={setCardState} setCardColor={setCardColor} color={color}>
            {text}
          </AnswerButton>
        ))}
      </div>
    </div>
  );
}

export default function Card({ index, question, answer }) {
  const [cardState, setCardState] = React.useState("closed");
  const [cardColor, setCardColor] = React.useState(null);

  switch (cardState) {
    case "answer":
      return <CardAnswer answer={answer} setCardState={setCardState} setCardColor={setCardColor} />;

    case "question":
      return <CardQuestion question={question} setCardState={setCardState} />;

    case "answered":
      return <CardClosed questionNumber={index} color={cardColor} />;

    default:
      return <CardClosed questionNumber={index} setCardState={setCardState} />;
  }
}
