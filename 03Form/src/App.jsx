import { useState } from "react";
import "./App.css";
import Form from "./components/Form";

function App() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  // let newUser;

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <p>heelooo</p>
      <Form
        username={userName}
        password={password}
        onUserNameChange={handleUserNameChange}
        onPasswordChange={handlePasswordChange}
        onFormSubmit={handleSubmit}
        submitted={submitted}
      />
      {/* {submitted && <Display username={userName} password={password} />} */}
    </>
  );
}

export default App;
