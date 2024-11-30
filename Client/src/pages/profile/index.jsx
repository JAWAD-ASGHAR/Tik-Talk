import { useAppStore } from "@/store";

const Profile = () => {
  const { userInfo } = useAppStore();
  return <>
  <div>Profile</div>
  <div>{userInfo.email}</div></>;
};

export default Profile;
