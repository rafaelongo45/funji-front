import axios from "axios";

const BASE_URL = "http://localhost:5000";
export default function postSigninData(e, userData, navigate) {
  e.preventDefault();
  const promise = axios.post(`${BASE_URL}/signin`, userData);
  promise.then((res) => {
    localStorage.setItem("token", res.data.token);
    localStorage.setItem("username", res.data.username);
    localStorage.setItem("profileImage", res.data.profileImage);
    navigate("/");
  });
  promise.catch((err) => {
    console.log(err);
    alert(err);
  });
}
