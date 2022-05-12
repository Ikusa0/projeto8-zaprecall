export default function HomeScreen({ setScreen }) {
  return (
    <div className="home-screen">
      <img src="./assets/img/logo.svg" alt="logo" />
      <h1 className="title">ZapRecall</h1>
      <button onClick={() => setScreen("application")}>Iniciar Recall</button>
    </div>
  );
}
