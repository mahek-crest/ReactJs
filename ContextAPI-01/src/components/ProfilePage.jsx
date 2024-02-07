import { useContext } from "react";
import UserContext from "../context/UserContext";

const ProfilePage = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="bg-slate-200 m-4 text-center">
      <h2>Hello profile page</h2>
      {/* Check if user exists before rendering user information */}
      {user && (
        <div>
          <p>Hello {user.username}.</p>
          <p>Your password is {user.password}.</p>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
