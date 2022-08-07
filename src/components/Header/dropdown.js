import { IoBackspaceSharp } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";

import "./assets/dropdown.scss";

export default function RenderDropdown({ setDropdownClick, navigate }) {
  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username");

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
        {token ? (
          <button>
            <div>
              <AiOutlineUser className="dd-button-icon" />
            </div>
            <p onClick={() => navigate("/profile", { state: { username } })}>
              My profile
            </p>
          </button>
        ) : (
          <button>
            <div>
              <AiOutlineUser className="dd-button-icon" />
            </div>
            <p onClick={() => navigate("/signin")}>Signin</p>
          </button>
        )}

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
