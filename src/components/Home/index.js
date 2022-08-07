import axios from "axios";
import { useEffect, useState } from "react";

import Header from "../Header";
import RenderKanjiApi from "./RenderKanjiApi";

import "./home.scss"
import { useLocation } from "react-router-dom";

const {REACT_APP_BASE_URL} = process.env
export default function Home(){
  const [kanjis, setKanjis] = useState([]);
  const location = useLocation();
  const collection = location.state
  let URL = '';
  useEffect(() => {
    collection ? URL = `${REACT_APP_BASE_URL}/kanjis/${collection.collection}` : URL = `${REACT_APP_BASE_URL}/kanjis/all`
    const promise = axios.get(URL);
    promise.then(res => setKanjis(res.data));
    promise.catch(err => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collection]);

  return (
    <>
      <Header />
      <main className="wrapper-home">
        <section className="kanjis-wrapper">
          <h2>Kanjis {collection ? `- ${collection.collection}`: ''}</h2>
          <div className="bar"></div>
          <section className="kanjis">
            <RenderKanjiApi kanjis={kanjis}/>
          </section>
        </section>
      </main>
    </>
  );
};