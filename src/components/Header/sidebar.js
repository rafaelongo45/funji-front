import axios from "axios";
import { useEffect, useState } from "react";
import {DebounceInput} from 'react-debounce-input';
import { MdOutlineArrowDropDown } from "react-icons/md";
import { MdOutlineArrowRight } from "react-icons/md";

import "./sidebar.scss";
import RenderGrades from "./RenderGrades";
import { UserSearchContainer } from "./UserSearch";

export default function RenderSidebar({ setSidebarClick }) {
  const BASEURL = 'http://localhost:5000';
  const [searchString, setSearchString] = useState('');
  const [searchedUser, setSearchedUser] = useState([]);
  const [gradesClick, setGradesClick] = useState(false);

  useEffect(() => {
    if(searchString.length < 3) return;
    const promise = axios.get(`${BASEURL}/users/${searchString}`);
    promise.then ( res => setSearchedUser(res.data));
    promise.catch ( err => console.log(err));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchString]);

  function changeClick(){
    gradesClick ? setGradesClick(false) : setGradesClick(true);;
  }

  return (
    <>
      <section className="sidebar-bg" onClick={() => setSidebarClick(false)} />
      <section className="sidebar">
        <DebounceInput
         placeholder="Search for other users..." 
         minLength={3}
         debounceTimeout={3}
         value={searchString}
         onChange={(e) => setSearchString(e.target.value)}/>
        {
          searchedUser.length === 0 ?
            <></>
          :
            <>
              <UserSearchContainer searchedUser={searchedUser}/>
              <div className="bg-layer" onClick={() => {setSearchedUser([]); setSearchString('')}}></div>
            </>
        }
        <section className="grades-section">
          { gradesClick ? <MdOutlineArrowDropDown /> : <MdOutlineArrowRight />}
          <p onClick={ () => changeClick()}>Grades</p>
          {
            gradesClick ? 
              <article>
                {RenderGrades()} 
              </article>
            :
              <></>
          }
        </section>
        <p>All Kanjis</p>
        <p>Help</p>
      </section>
    </>
  );
}
