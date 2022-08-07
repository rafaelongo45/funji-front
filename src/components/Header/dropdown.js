import { IoBackspaceSharp } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";

import "./dropdown.scss";

export default function RenderDropdown({ setDropdownClick, navigate }) {
  const token = localStorage.getItem("token");

  function logout() {
    localStorage.clear();
    window.location.reload();
  }
  return (
    <>
      <div
        className="dropdown-page-wrapper"
        onClick={() => setDropdownClick(false)}
      />
      <div className="dropdown-arrow"></div>
      <section className="dropdown-box">
        <button>
          <div>
            <AiOutlineUser className="dd-button-icon" />
          </div>
          {token ? (
            <p onClick={() => navigate("/myprofile")}>My profile</p>
          ) : (
            <p onClick={() => navigate("/signin")}>Signin</p>
          )}
        </button>

        {token ? (
          <button onClick={() => logout()}>
            <div>
              <IoBackspaceSharp className="dd-button-icon" />
            </div>
            <p>Logout</p>
          </button>
        ) : (
          <></>
        )}
      </section>
    </>
  );
}
