import axios from "axios";

const BASEURL = 'http://localhost:5000';
export async function PostSignupData(e, signupData, navigate){
  e.preventDefault();
  const promise = axios.post(`${BASEURL}/signup`, signupData);
  promise.then(() => {
    navigate('/signin');
  });
  promise.catch( err => console.log(err));
};

