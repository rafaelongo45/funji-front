import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { DebounceInput } from "react-debounce-input";
import { IoSendSharp } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";

import UserContext from "../../contexts/UserContext.js";
import Header from "../Header/index.js";
import RenderKanjiInfo from "../Kanji/RenderKanjiInfos.js";
import selectVocabulary from "../utils/selectVocabulary.js";
import translator from "../utils/translate.js";
import RenderModal from "./ReviewModal.js";

import "./reviewPage.scss";

const { REACT_APP_BASE_URL } = process.env;
export default function ReviewPage() {
  const { userInfo } = useContext(UserContext);
  const userKanjis = userInfo.userKanjis;
  const [cardClick, setCardClick] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [kanjiInfo, setKanjiInfo] = useState([]);
  const [lastLetter, setLastLetter] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [word, setWord] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  let kanji = location.state.kanji.kanji;
  let index = location.state.index;
  const username = localStorage.getItem("username");
  const hashtable = selectVocabulary("hiragana");
  function cardToggle() {
    if (cardClick) {
      setCardClick(false);
    } else {
      setCardClick(true);
    }
  }

  function checkIndexRedirect() {
    if (index === userKanjis.length - 1) {
      navigate("/profile", { state: { username: username } });
    }

    if (index !== userKanjis.length - 1) {
      index++;
      kanji = { kanji: userInfo.userKanjis[index].kanji };
      navigate(`/review/${userInfo.userKanjis[index].kanji}`, {
        state: { kanji: kanji, index: index },
      });
    }
  }

  useEffect(() => {
    const promise = axios.get(`${REACT_APP_BASE_URL}/kanji/${kanji}`);
    promise.then((res) => setKanjiInfo(res.data));
    promise.catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  function changeInput(e){
    const letter = translator(hashtable, lastLetter);
    if(lastLetter === 'Backspace'){
      setWord(word.slice(0, word.length - 1))
    }else{
      setWord(word + letter)
    }
  } 
  return (
    <>
      <Header />
      {showModal ? (
        <RenderModal setShowModal={setShowModal} setCardClick={setCardClick} />
      ) : (
        <> </>
      )}
      <main className="review-page-wrapper">
        {!cardClick ? (
          <section className="kanji-card" onClick={() => setShowModal(true)}>
            <p className="kanji">{kanji}</p>
            <div className="front-indicator"></div>
          </section>
        ) : (
          <section className="kanji-infos" onClick={() => cardToggle()}>
            <div className="back-indicator"></div>
            <section className="kanji-name-box">
              <div className="kanji">
                <em>{kanji}</em>
              </div>
            </section>
            <div className="kanjis-renders">
              <RenderKanjiInfo
                info={kanjiInfo.kun_readings}
                title={"Kun'yomi"}
              />
              <RenderKanjiInfo info={kanjiInfo.on_readings} title={"On'yomi"} />
              <RenderKanjiInfo info={kanjiInfo.meanings} title={"Meanings"} />
              <RenderKanjiInfo
                info={kanjiInfo.name_readings}
                title={"Name readings"}
              />
            </div>
          </section>
        )}

        <form className="card-answer">
          <input
            onKeyDown={(e) => setLastLetter(e.key)}
            type={'text'}
            onChange={(e) => changeInput(e)}
            value={word}
          />
          <IoSendSharp />
        </form>

        {cardClick ? (
          <></>
        ) : (
          <div className="buttons-wrapper">
            <button
              onClick={() =>
                navigate("/profile", { state: { username: username } })
              }
            >
              Go back
            </button>
            <button onClick={() => checkIndexRedirect()}>Next</button>
          </div>
        )}
      </main>
    </>
  );
}
