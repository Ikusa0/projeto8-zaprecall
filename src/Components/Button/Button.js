import "./button.css";

export default function StartButton({ execute, children }) {
  return <button className="button-component" onClick={execute}>{children}</button>;
}
