import axios from "axios";
import { useContext } from "react";

import UserContext from "../../contexts/UserContext.js";

const { REACT_APP_BASE_URL } = process.env;
export default function GetUserKanjis(username){
  const {userInfo, setUserInfo} = useContext(UserContext)
  const promise = axios.get(`${REACT_APP_BASE_URL}/${username}/kanjis`)
  promise.then(res => setUserInfo({...userInfo, userKanjis: res.data.userKanjis}));
  promise.catch(err => console.log(err));
} 