import axios from "axios";

const {REACT_APP_BASE_URL} = process.env;
export default function PostKanjiUser(kanji, grade, token) {
  const header = {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }
  const kanjiData = { kanji, grade };
  const promise = axios.post(`${REACT_APP_BASE_URL}/kanji`, kanjiData, header);
  promise.then(res => console.log(res));
  promise.catch(err => console.log(err));
}
