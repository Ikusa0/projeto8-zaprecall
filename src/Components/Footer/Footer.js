import "./footer.css";

function AnswerIcon({ answer, index }) {
  switch (answer) {
    case "green":
      return <ion-icon class="md hydrated icon green" name="checkmark-circle"></ion-icon>;

    case "red":
      return <ion-icon class="md hydrated icon red" name="close-circle"></ion-icon>;

    case "orange":
      return <ion-icon class="md hydrated icon orange" name="help-circle"></ion-icon>;

    default:
      break;
  }
}

function AnswersContainer({ answers }) {
  return (
    <div className="answers-container">
      {answers.map((answer, index) => (
        <AnswerIcon answer={answer} key={index} />
      ))}
    </div>
  );
}

export default function Footer({ cards }) {
  const answered = 0;
  const numQuestions = cards.length;
  const answers = ["green", "orange", "red", "green", "green", "green", "green", "green"];

  return (
    <div className="footer">
      <span>{`${answered}/${numQuestions} CONCLUÍDOS`}</span>
      <AnswersContainer answers={answers} />
    </div>
  );
}
