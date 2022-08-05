import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "../Signup/index.js";

function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;