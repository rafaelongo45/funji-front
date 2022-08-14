import "./renderModal.scss";

export default function RenderModal({ setShowModal, navigate, kanjis }) {
  return (
    <section className="modal-wrapper">
      <section
        className="modal-bg"
        onClick={() => setShowModal(false)}
      ></section>
      <section className="modal">
        <h1>What do you want to review?</h1>
        <div className="button-wrapper">
          <button
            className="kun-button"
            onClick={() =>
              navigate(`/review/${kanjis[0].kanji}`, {
                state: { kanji: kanjis[0], index: 0, type: "kun" },
              })
            }
          >
            Kun'yomi
          </button>
          <button
            onClick={() =>
              navigate(`/review/${kanjis[0].kanji}`, {
                state: { kanji: kanjis[0], index: 0 , type: "on",}
              })
            }
          >
            On'yomi
          </button>
          <button
            onClick={() =>
              navigate(`/review/${kanjis[0].kanji}`, {
                state: { kanji: kanjis[0], index: 0, type:'meaning'},
                type: "meaning",
              })
            }
          >
            Meaning
          </button>
        </div>
      </section>
    </section>
  );
}
