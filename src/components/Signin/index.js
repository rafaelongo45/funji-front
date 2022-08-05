import { useState } from "react";
import { useNavigate } from "react-router-dom";
import postSigninData from "./SendSigninData";

import "./signin.scss";

export default function Signin(){
  const navigate = useNavigate();
  const [userData, setUserData] = useState({email: "", password: ""});

  return (
    <main className="wrapper-signin">
      <h1 className="title">Funji</h1>
      <section className="signin-box">
        <form onSubmit={(e) => postSigninData(e, userData, navigate)}>
          <input type={"text"} required placeholder="email" onChange={(e) => setUserData({...userData, email: e.target.value})}></input>
          <input type={"password"} required placeholder="password" onChange={(e) => setUserData({...userData, password: e.target.value})}></input>
          <button type="submit">Signin</button>
          <p onClick={() => navigate("/signup")}>Don’t have an account?</p>
        </form>
      </section>
    </main>
  )
};