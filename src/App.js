import React from "react";
import HomeScreen from "./Pages/Home/Home";
import ApplicationScreen from "./Pages/Application/Application";

export default function App() {
  const [screen, setScreen] = React.useState("home");

  if (screen === "home") {
    return <HomeScreen setScreen={setScreen} />;
  }

  if (screen === "application") {
    return <ApplicationScreen setScreen={setScreen} />;
  }
}
