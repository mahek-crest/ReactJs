import { useRef } from "react";
import { useState } from "react";

export default function Player() {
  const playerName = useRef();

  const [enteredName, setEnteredName] = useState(null);

  const handleSubmit = () => {
    setEnteredName(enteredName.current.value);
  };

  return (
    <section id="player">
      <h2>Welcome {playerName ?? "User"}</h2>
      <p>
        <input type="text" ref={playerName} />
        <button onClick={handleSubmit}>Set Name</button>
      </p>
    </section>
  );
}
