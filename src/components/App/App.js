import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import getUserInfo from "../utils/getUserInfo.js";
import UserContext from "../../contexts/UserContext.js";

import Home from "../Home/index.js";
import Signin from "../Signin/index.js";
import Signup from "../Signup/index.js";
import ProfilePage from "../Profile/index.js";

function App() {
  const [ userInfo ] = useState(getUserInfo);
  return (
    <BrowserRouter>
      <UserContext.Provider value={{ userInfo }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
