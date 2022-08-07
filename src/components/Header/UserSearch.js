import RenderUser from "./RenderUser";
import "./userSearch.scss";

export function UserSearchContainer({searchedUser}){
  return (
    <section className="container">
      {
        searchedUser.map( (user) => {
          return <RenderUser id = {user.id} username = {user.username} profileImage = {user.profileImage}/> 
        })
      }
    </section>
  )
}