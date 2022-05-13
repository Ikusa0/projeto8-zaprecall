import "./icon_button.css";

export default function IconButton({ icon, execute }) {
  return (
    <button className="icon-button">
      <ion-icon
        onClick={() => {
          execute();
        }}
        class="md hydrated icon"
        name={icon}
      ></ion-icon>
    </button>
  );
}
