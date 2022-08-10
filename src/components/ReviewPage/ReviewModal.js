import "../Profile/renderModal.scss";

export default function RenderModal({setShowModal, setCardClick}) {
  function showCardInfo(){
    setShowModal(false);
    setCardClick(true);
  }
  return (
    <section className="modal-wrapper">
      <section
        className="modal-bg"
        onClick={() => setShowModal(false)}
      ></section>
      <section className="modal">
        <h1>Are you sure you want to look at the kanji’s information?</h1>
        <div className="button-wrapper">
          <button onClick={() => setShowModal(false)}>No</button>
          <button onClick={() => showCardInfo()}>Yes</button>
        </div>
      </section>
    </section>
  );
}
