import axios from "axios";

const BASE_URL = 'http://localhost:5000';
export default function postSigninData(e, userData, navigate){
  e.preventDefault();
  const promise = axios.post(`${BASE_URL}/signin`, userData);
  promise.then( () => {
    navigate('/')
  });
  promise.catch( err => console.log(err));
}