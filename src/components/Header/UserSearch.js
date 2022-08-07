import RenderUser from "./RenderUser";
import generateNumber from "../utils/randomNumber.js";

import "./assets/userSearch.scss";

export function UserSearchContainer({ searchedUser, navigate, setSidebarClick}) {
  return (
    <section className="container">
      {searchedUser.map((user) => {
        return (
          <RenderUser
            navigate={navigate}
            id={user.id}
            username={user.username}
            profileImage={user.profileImage}
            setSidebarClick={setSidebarClick}
            key={user.id + generateNumber()
            }
          />
        );
      })}
    </section>
  );
}
