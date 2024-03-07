import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";

function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [submit, setSubmit] = useState(false);

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setUsername("");
    setEmail("");
    setSubmit(true);
    console.log("inside function ", submit);
  };

  useEffect(() => {
    console.log("Submit state updated:", submit);
  }, [submit]);

  return (
    <>
      <h2>hello</h2>
      <Form
        username={username}
        email={email}
        handleEmail={handleEmail}
        handleUsername={handleUsername}
        onFormSubmit={handleFormSubmit}
      />
      {submit ? "Not Submitted" : "Submitted"}
    </>
  );
}

export default App;
