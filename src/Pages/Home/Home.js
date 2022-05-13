import logo from "../../Assets/Images/logo.svg";

export default function Home({ setScreen }) {
  return (
    <div className="home">
      <img src={logo} alt="logo" />
      <h1 className="title">ZapRecall</h1>
      <button onClick={() => setScreen("application")}>Iniciar Recall</button>
    </div>
  );
}
