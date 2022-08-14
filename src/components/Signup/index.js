import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { PostSignupData } from "./SendSignupData.js";

import "./signup.scss"

function Signup(){
  const navigate = useNavigate();
  const [ userData, setUserData ] = useState({username: "", email: "", password: "", confirmPassword: "", profileImage: ""});
  
  return (
    <main className="wrapper-signup">
      <h1 className="title">Funji</h1>
      <section className="signup-box">
        <div>
          {
            userData.profileImage ?
              <img src={userData.profileImage} alt="Profile"/>
            :
              <FaUserCircle />
          }          
        </div>

        <form onSubmit={(e) => {PostSignupData(e, userData, navigate)}}>
          <input className="img-input" type={"url"} placeholder="image link" onChange={(e) => setUserData({...userData, profileImage: e.target.value})} required></input>
          <input className="username-input" type={"text"} placeholder="username" onChange={(e) => setUserData({...userData, username: e.target.value})} required></input>
          <input className="email-input" type={"email"} placeholder="email" onChange={(e) => setUserData({...userData, email: e.target.value})} required></input>
          <input className="password-input" type={"password"} placeholder="password" onChange={(e) => setUserData({...userData, password: e.target.value})} required></input>
          <input className="confirmPassword-input" type={"password"} placeholder="confirm password" onChange={(e) => setUserData({...userData, confirmPassword: e.target.value})} required></input>
          <button className="submit-signup" type="submit"> Signup </button>
          <p className="signin-redirect-button" onClick={ () =>  navigate('/signin')}> Already have an account?</p>
        </form>
      </section>
    </main>
  )
};

export default Signup;