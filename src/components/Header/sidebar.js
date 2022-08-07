import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineArrowRight } from "react-icons/md";
import { DebounceInput } from "react-debounce-input";
import { MdOutlineArrowDropDown } from "react-icons/md";

import "./assets/sidebar.scss";
import RenderGrades from "./RenderGrades";
import { UserSearchContainer } from "./UserSearch";

export default function RenderSidebar({ setSidebarClick }) {
  const navigate = useNavigate();
  const {REACT_APP_BASE_URL} = process.env;
  const [searchString, setSearchString] = useState("");
  const [searchedUser, setSearchedUser] = useState([]);
  const [gradesClick, setGradesClick] = useState(false);

  useEffect(() => {
    if (searchString.length < 3) return;
    const promise = axios.get(`${REACT_APP_BASE_URL}/users/${searchString}`);
    promise.then((res) => setSearchedUser(res.data));
    promise.catch((err) => console.log(err.message));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchString]);

  function changeClick() {
    gradesClick ? setGradesClick(false) : setGradesClick(true);
  }

  return (
    <>
      <section className="sidebar-bg" onClick={() => setSidebarClick(false)} />
      <section className="sidebar">
        <DebounceInput
          placeholder="Search for other users..."
          minLength={3}
          debounceTimeout={3}
          value={searchString }
          onChange={(e) => setSearchString(e.target.value)}
        />
        {searchedUser.length === 0 ? (
          <></>
        ) : (
          <>
            <UserSearchContainer searchedUser={searchedUser} navigate={navigate} setSidebarClick={setSidebarClick}/>
            <div
              className="bg-layer"
              onClick={() => {
                setSearchedUser([]);
                setSearchString("");
              }}
            ></div>
          </>
        )}
        <section className="grades-section">
          {gradesClick ? <MdOutlineArrowDropDown /> : <MdOutlineArrowRight />}
          <p onClick={() => changeClick()}>Grades</p>
          {gradesClick ? <article>{RenderGrades(navigate)}</article> : <></>}
        </section>
        <p>All Kanjis</p>
        <p>Help</p>
      </section>
    </>
  );
}
