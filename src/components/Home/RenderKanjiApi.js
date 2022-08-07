import generateNumber from "../utils/randomNumber";

import "../Profile/kanji.scss";

export default function RenderKanjiApi({kanjis}){
  return (
    kanjis.map(kanji =>{
      return (
        <article className="kanji-box" key={kanji + generateNumber()}>
          <p className="kanji">{kanji}</p>
        </article>
      )
    })
  )
}