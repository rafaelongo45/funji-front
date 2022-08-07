import "./assets/user.scss";

export default function RenderUser({ id, username, profileImage, navigate, setSidebarClick }) {
  const userUsername = localStorage.getItem("username");
  return (
    <>
      <section className="user-box" onClick={() => {setSidebarClick(false); navigate('/profile', { state: {username: username}})}}>
        <div>
          <img src={profileImage} alt={"Profile" + id} />
        </div>
        <p className="username">
          {username}

          {username === userUsername ? <span>you</span> : <></>}
        </p>
      </section>
      <div className="bar"></div>
    </>
  );
}
