import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

import "./assets/header.scss";
import RenderDropdown from "./dropdown.js";
import RenderSidebar from "./sidebar";

export default function Header() {
  const [dropdownClick, setDropdownClick] = useState(false);
  const [sidebarClick, setSidebarClick] = useState(false);
  const profileImage = localStorage.getItem("profileImage");
  const navigate = useNavigate();
  function ddChange() {
    dropdownClick ? setDropdownClick(false) : setDropdownClick(true);
  }

  return (
    <header className="header">
      <AiOutlineMenu
        className="sidebar-icon"
        onClick={() => setSidebarClick(true)}
      />

      {sidebarClick ? (
        <RenderSidebar setSidebarClick={setSidebarClick} />
      ) : (
        <></>
      )}

      <h1 onClick={() => navigate("/")}>Funji</h1>

      <div className="user-profile">
        {profileImage ? (
          <img src={profileImage} alt="Profile" onClick={() => ddChange()} />
        ) : (
          <FaUserCircle onClick={() => ddChange()} />
        )}

        {dropdownClick ? (
          <RenderDropdown
            setDropdownClick={setDropdownClick}
            navigate={navigate}
          />
        ) : (
          <></>
        )}
      </div>
    </header>
  );
}
