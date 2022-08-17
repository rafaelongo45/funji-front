import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Header from "../Header";
import RenderKanjis from "./RenderKanjis.js";
import RenderGrades from "../Header/RenderGrades.js";
import RenderModal from "./RenderModal.js";

import "./profile.scss";
import UserContext from "../../contexts/UserContext";

export default function ProfilePage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { REACT_APP_BASE_URL } = process.env;
  const username = location.state.username;
  const { setUserInfo, userInfo } = useContext(UserContext);
  const userUsername = localStorage.getItem("username");
  const [userData, setUserData] = useState([]);
  const [kanjis, setKanjis] = useState([]);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    const promise = axios.get(`${REACT_APP_BASE_URL}/user/${username}/kanjis`);
    promise.then((res) => {
      setUserData(res.data);
      setKanjis(res.data.kanjis);
      username === userUsername ? setUserInfo({...userInfo, userKanjis: res.data.kanjis}) : <></>
    });
    promise.catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username]);
  return (
    <>
      <Header />
      {showModal ? <RenderModal setShowModal={setShowModal} navigate={navigate} kanjis={kanjis}/> : <></>}
      <main className="profile-wrapper">
        <div className="bg-image">
          <img
            src="https://i.pinimg.com/originals/9b/c6/7b/9bc67b820f7278ed3f5dc209c52ac434.jpg"
            alt="bg-img"
          />
          <div className="user-profile-image">
            <img src={userData.profileImage} alt="profile-img" />
          </div>
        </div>
        <h1 className="username">{username}</h1>

        {userUsername === userData.username ? (
          <article className="collections-box">
            <h2 className="collections-title">Learn a new Kanji!</h2>
            <div className="bar"></div>
            <RenderGrades navigate={navigate} />
          </article>
        ) : (
          <></>
        )}

        <section className="kanjis-wrapper">
          <p className="kanjis-wrapper-title">
            {username}'s viewed kanjis
            {username === userUsername ? (
              <button
                className="review-button"
                onClick={() => setShowModal(true)}
                disabled = {kanjis.length === 0 ? true : false}
              >
                Review
              </button>
            ) : (
              <></>
            )}
          </p>
          <div className="bar"></div>
          <section className="kanjis-big-box">
            {kanjis.length === 0 ? (
              <p className="no-kanjis">
                Looks like {username} hasn't saved any kanjis yet...
              </p>
            ) : (
              <RenderKanjis kanjis={kanjis} navigate={navigate} />
            )}
          </section>
        </section>
      </main>
    </>
  );
}


