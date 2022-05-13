import logo from "../../Assets/Images/logo.svg";
import "./logo_small.css";

export default function LogoSmall() {
  return (
    <div className="logo-small">
      <img src={logo} alt="logo" />
      <h1 className="title">ZapRecall</h1>
    </div>
  );
}
