import React from "react";
import HomeScreen from "./HomeScreen";


export default function App() {
  const [screen, setScreen] = React.useState("home");

  if (screen === "home") {
    return (
      <>
        <HomeScreen setScreen={setScreen} />
      </>
    );
  }
}
