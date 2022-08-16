import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext";

import Header from "../Header";

import "./kanjiPage.scss";
import PostKanjiUser from "./postKanji.js";
import RenderKanjiInfo from "./RenderKanjiInfos.js";

const { REACT_APP_BASE_URL } = process.env;
export default function KanjiPage() {
  const {userInfo, setUserInfo} = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();
  const token = localStorage.getItem('token');
  const username = localStorage.getItem('username');
  const { kanji } = location.state;
  const [kanjiInfo, setKanjiInfo] = useState([]);
  const [buttonClick, setButtonClick] = useState(false);
  useEffect(() => {
    const promise = axios.get(`${REACT_APP_BASE_URL}/kanji/${kanji}`);
    promise.then((res) => setKanjiInfo(res.data));
    promise.catch((err) => console.log(err));
    if(username){
      const promiseKanjis = axios.get(`${REACT_APP_BASE_URL}/user/${username}/kanjis`)
      promiseKanjis.then(res => {
        setUserInfo({...userInfo, userKanjis: res.data.kanjis})
      });
      promiseKanjis.catch(err => console.log(err));
    } 
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  let hasKanji;
  
  if(userInfo.userKanjis){
    hasKanji = userInfo.userKanjis.find(kanjiObj => kanjiObj.kanji === kanji);
  }
  return (
    <>
      <Header />
      <main className="kanji-page-wrapper">
        <section className="kanji-name-box">
          <div className="kanji">
            <em>{kanji}</em>
          </div>
        </section>
        <section className="kanji-info">
          <h1>Kanji's information</h1>
          <div className="bar" />
          <section className="kanji-all-infos">
            <RenderKanjiInfo info={kanjiInfo.kun_readings} title={"Kun'yomi"}/>
            <RenderKanjiInfo info={kanjiInfo.on_readings} title={"On'yomi"}/>
            <RenderKanjiInfo info={kanjiInfo.meanings} title={"Meanings"}/>
            <RenderKanjiInfo info={kanjiInfo.name_readings} title={"Name readings"}/>
          </section>
          <div className="button-wrapper">
            <button className="back-button" onClick={() => navigate(-1)}> Go back </button>
            <button disabled={token && !hasKanji && !buttonClick ? false : true} onClick={() => PostKanjiUser(kanjiInfo.kanji, kanjiInfo.grade, token, setButtonClick)} > Save </button>
          </div>
        </section>
      </main>
    </>
  );
}
