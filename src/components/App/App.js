import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import getUserInfo from "../utils/getUserInfo.js";
import UserContext from "../../contexts/UserContext.js";

import Home from "../Home/index.js";
import Signin from "../Signin/index.js";
import Signup from "../Signup/index.js";
import KanjiPage from "../Kanji/index.js";
import ProfilePage from "../Profile/index.js";
import ReviewPage from "../ReviewPage/ReviewPage.js";

function App() {
  const [ userInfo, setUserInfo ] = useState(getUserInfo);
  return (
    <BrowserRouter>
      <UserContext.Provider value={{ userInfo, setUserInfo }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/kanji" element={<KanjiPage />} />
          <Route path="/review" element={<ReviewPage />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
