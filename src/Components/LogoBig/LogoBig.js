import logo from "../../Assets/Images/logo.svg";
import "./logo_big.css";

export default function LogoBig() {
  return (
    <div className="logo-big">
      <img src={logo} alt="logo" />
      <h1 className="title">ZapRecall</h1>
    </div>
  );
}
