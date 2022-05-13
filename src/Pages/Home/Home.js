import "./home.css";
import LogoBig from "../../Components/LogoBig/LogoBig";
import Button from "../../Components/Button/Button";

export default function Home({ setScreen }) {
  return (
    <div className="home">
      <LogoBig />
      <Button execute={() => setScreen("application")}>Iniciar Recall</Button>
    </div>
  );
}
