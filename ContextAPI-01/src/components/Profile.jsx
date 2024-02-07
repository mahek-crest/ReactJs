import { useContext, useState } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);

  if (!user) {
    return <div className="bg-gray-300 text-2xl text-center">please Login</div>;
  }

  return (
    <>
      <div className="bg-gray-300 text-2xl text-center">
        <h2>Welcome {user.username}</h2>
        <p>Username : {user.username}</p>
        <p>Password : {user.password}</p>
      </div>
    </>
  );
};

export default Profile;
