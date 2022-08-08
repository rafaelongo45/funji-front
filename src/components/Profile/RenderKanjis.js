import generateNumber from "../utils/randomNumber.js";

import "./kanji.scss";

export default function RenderKanjis({kanjis, navigate}){
  return (
      kanjis.map(kanji =>{
        return (
          <article className="kanji-box" onClick={() => navigate('/kanji', {state: kanji})} key={kanji + generateNumber()}>
            <p className="kanji">{kanji.kanji}</p>
          </article>
        )
      })
  )
};