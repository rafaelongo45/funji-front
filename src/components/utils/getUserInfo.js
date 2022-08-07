export default function getUserInfo() {
  const token = localStorage.getItem("token");
  if (token) {
    return {
      token,
      username: localStorage.getItem("username"),
      profileImage: localStorage.getItem("profileImage"),
    };
  }

  return {
    token: "",
    username: "",
    profileImage: "",
  };
}
