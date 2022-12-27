import { React } from "react";

export const UserInfo = ({ email, name, birthday }) => {
  return (
    <>
      <h4> Your Info</h4>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </>
  );
};
export default UserInfo;
