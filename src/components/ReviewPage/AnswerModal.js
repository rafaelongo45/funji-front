import "./answerModal.scss";

export default function AnswerModal({ setShowAnswer, answer }) {
  return (
    <section className="modal-answer-wrapper">
      <section
        className="modal-answer-bg"
        onClick={() => setShowAnswer(false)}
      ></section>
      <section className="modal-answer">
        <h1>{answer}</h1>
      </section>
    </section>
  );
}
