import axios from "axios";

const {REACT_APP_BASE_URL} = process.env;
export default function PostKanjiUser(kanji, grade, token, setButtonClick) {
  const header = {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }
  let kanjiData;
  grade ? kanjiData = { kanji, grade: grade.toString() } : kanjiData = { kanji, grade: '0' };
  const promise = axios.post(`${REACT_APP_BASE_URL}/kanji`, kanjiData, header);
  promise.then(res => {
    setButtonClick(true);
  });
  promise.catch(err => console.log(err));
}
