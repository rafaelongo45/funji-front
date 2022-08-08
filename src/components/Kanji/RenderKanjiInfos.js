import generateNumber from "../utils/randomNumber";
import "./kanjiInfoComponent.scss";

export default function RenderKanjiInfo({ info, title }) {
  return (
    <section className="info">
      <em className="title">{title}</em>
      {
        info ? 
        <section className="kanji-info-container">
          <div className="bar"></div>
        {
          info.map(reading => {
            return <article key={reading + generateNumber()}>{reading}</article>
          })
        }
      </section>
      :
      <></>
      }
    </section>
  )
}
