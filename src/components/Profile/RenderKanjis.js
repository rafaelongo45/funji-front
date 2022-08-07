import generateNumber from "../utils/randomNumber.js";

import "./kanji.scss";

export default function RenderKanjis({kanjis}){
  return (
      kanjis.map(kanji =>{
        return (
          <article className="kanji-box" key={kanji + generateNumber()}>
            <p className="kanji">{kanji.kanji}</p>
          </article>
        )
      })
  )
};