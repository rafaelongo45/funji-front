import axios from "axios";

const {REACT_APP_BASE_URL} = process.env;
export async function PostSignupData(e, signupData, navigate){
  e.preventDefault();
  const promise = axios.post(`${REACT_APP_BASE_URL}/signup`, signupData);
  promise.then(() => {
    navigate('/signin');
  });
  promise.catch( err => {
    console.log(err)
    alert(err.message)
  });
};

