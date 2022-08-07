import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import getUserInfo from "../utils/getUserInfo.js";
import UserContext from "../../contexts/UserContext.js";

import Header from "../Header/index.js";
import Signin from "../Signin/index.js";
import Signup from "../Signup/index.js";

function App() {
  const [ userInfo ] = useState(getUserInfo);
  return (
    <BrowserRouter>
      <UserContext.Provider value={{ userInfo }}>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
