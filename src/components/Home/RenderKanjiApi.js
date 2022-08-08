import generateNumber from "../utils/randomNumber";

import "../Profile/kanji.scss";

export default function RenderKanjiApi({kanjis, navigate}){
  return (
    kanjis.map(kanji =>{
      return (
        <article className="kanji-box" onClick={() => navigate('/kanji', { state: {kanji}})} key={kanji + generateNumber()}>
          <p className="kanji">{kanji}</p>
        </article>
      )
    })
  )
}