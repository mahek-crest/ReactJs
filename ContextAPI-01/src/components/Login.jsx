import { useContext, useState } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
    console.log(e);
  };

  return (
    <div className="bg-slate-200 p-20 ">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="username"
        value={username}
        className="bg-slate-300 p-2 m-3"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="password"
        className="bg-slate-300 p-2 m-3"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="bg-red-400 p-2" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Login;
