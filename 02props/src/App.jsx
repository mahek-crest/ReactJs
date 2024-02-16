import { useState } from "react";
import "./App.css";
import Greetings from "./comoponents/Greetings";
import DisplayMessage from "./comoponents/DisplayMessage";

function App() {
  const [message, setMessage] = useState("heelo this is a state variable");

  const handleChnage = () => {
    setMessage("this is from state and on click")
  }

  return (
    <>
      <h1>heello</h1>
      <Greetings />
      <DisplayMessage message={message} />
    </>
  );
}

export default App;
