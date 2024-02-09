import { useEffect } from "react";
import Display from "./Display";

const Form = ({
  username,
  password,
  onPasswordChange,
  onUserNameChange,
  onFormSubmit,
  submitted,
}) => {
  // console.log(submitted);
  return (
    <>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          className="username"
          placeholder="Enter username"
          value={username}
          onChange={onUserNameChange}
        />

        <input
          type="password"
          className="password"
          placeholder="Enter password"
          value={password}
          onChange={onPasswordChange}
        />

        <button>Submit </button>
      </form>
      <Display username={username} password={password} submitted={submitted} />
    </>
  );
};

export default Form;
