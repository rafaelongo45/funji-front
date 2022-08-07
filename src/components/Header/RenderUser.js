import "./user.scss";

export default function RenderUser({ id, username, profileImage }) {
  return (
    <>
      <section className="user-box">
        <div>
          <img src={profileImage} alt={"Profile" + id} />
        </div>
        <p className="username">{username}</p>
      </section>
      <div className="bar"></div>
    </>
  );
}
