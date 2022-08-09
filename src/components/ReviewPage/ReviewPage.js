import { useContext } from "react"
import { IoSendSharp } from "react-icons/io5"
import { useNavigate } from "react-router-dom";

import UserContext from "../../contexts/UserContext.js"
import Header from "../Header/index.js";

import "./reviewPage.scss";

export default function ReviewPage(){
  const {userInfo} = useContext(UserContext);
  const userKanjis = userInfo.userKanjis;
  const navigate = useNavigate();
  const username = localStorage.getItem('username')
  console.log(userInfo)
  console.log(userKanjis)
  return (
    <>
      <Header />
      <main className="review-page-wrapper">
        <section className="kanji-card">
        <p className="kanji">{userKanjis[1].kanji}</p>
        <div className="front-indicator"></div>
        </section>

        <div className="card-answer">
          <input></input>
          <IoSendSharp />
        </div>

        <div className="buttons-wrapper">
          <button onClick={() => navigate('/profile', {state: {username: username}})}>Go back</button>
          <button>Next</button>
        </div>
      </main>
    </>
  )
}