import axios from "axios";

const {REACT_APP_BASE_URL} = process.env;
console.log(REACT_APP_BASE_URL)
export default function postSigninData(e, userData, navigate) {
  e.preventDefault();
  const promise = axios.post(`${REACT_APP_BASE_URL}/signin`, userData);
  promise.then((res) => {
    localStorage.setItem("token", res.data.token);
    localStorage.setItem("username", res.data.username);
    localStorage.setItem("profileImage", res.data.profileImage);
    navigate("/");
  });
  promise.catch((err) => {
    console.log(err);
    alert(err.message);
  });
}
