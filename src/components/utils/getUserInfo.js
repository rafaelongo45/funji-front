export default function getUserInfo() {
  const token = localStorage.getItem("token");
  if (token) {
    return {
      username: localStorage.getItem("username"),
      profileImage: localStorage.getItem("profileImage"),
    };
  }

  return {
    username: "",
    profileImage: "",
  };
}
