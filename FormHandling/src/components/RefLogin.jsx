import { useState, useRef } from "react";

export default function RefLogin() {
  //method 3--> using refs
  const [emailIsInvalid, seEmailIsInvalid] = useState(false);

  const email = useRef();
  const password = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit was clicked");

    const enteredEmail = email.current.value;
    const enteredPasword = password.current.value;
    const emailIsValid = enteredEmail.includes("@");

    if (!emailIsValid) {
      seEmailIsInvalid(true);
      return;
    }

    seEmailIsInvalid(false);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" ref={email} />
          <div className="control-error">
            {emailIsInvalid && <p>Please enter a valid email address </p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" ref={password} />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}