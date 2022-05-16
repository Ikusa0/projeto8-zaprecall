import React from "react";
import "./application.css";
import LogoSmall from "../../Components/LogoSmall/LogoSmall";
import CardsContainer from "../../Components/CardsContainer/CardsContainer";
import Footer from "../../Components/Footer/Footer";

export default function Application({ setScreen }) {
  const cards = [
    { question: "O que é JSX?", answer: "uma extensão de linguagem do JavaScript" },
    { question: "O React é __", answer: "uma biblioteca JavaScript para construção de interfaces" },
    { question: "Componentes devem iniciar com __", answer: "letra maiúscula" },
    { question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
    { question: "O ReactDOM nos ajuda __", answer: "interagindo com a DOM para colocar componentes React na mesma" },
    { question: "Usamos o npm para __", answer: "gerenciar os pacotes necessários e suas dependências" },
    { question: "Usamos props para __", answer: "passar diferentes informações para componentes " },
    {
      question: "Usamos estado (state) para __",
      answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
    },
  ].sort((card) => Math.random() - 0.5);

  return (
    <div className="application">
      <LogoSmall />
      <CardsContainer cards={cards} />
      <Footer cards={cards} />
    </div>
  );
}
