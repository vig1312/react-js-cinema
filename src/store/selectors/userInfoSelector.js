import { useSelector } from "react-redux";

const UserInfo = () => {
  return useSelector((state) => state.profile.loggedUser);
}
export default UserInfo;

