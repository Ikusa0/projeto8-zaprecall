import React from "react";
import "./application.css";
import LogoSmall from "../../Components/LogoSmall/LogoSmall";
import CardsContainer from "../../Components/CardsContainer/CardsContainer";

export default function Application({ setScreen }) {
  return (
    <div className="application">
      <LogoSmall />
      <CardsContainer />
    </div>
  );
}
