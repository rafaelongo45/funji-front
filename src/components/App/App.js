import { BrowserRouter, Routes, Route } from "react-router-dom";

import Signin from "../Signin/index.js";
import Signup from "../Signup/index.js";

function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;