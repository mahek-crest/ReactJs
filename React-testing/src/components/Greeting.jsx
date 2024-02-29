import { useState } from "react";

const Greeting = () => {
  const [change, setChange] = useState(false);

  const handleTextChange = () => {
    setChange(!change);
  };

  return (
    <>
      <h2> Hello ! </h2>
      {!change && <p>good to see you</p>}
      {change && <p>text changed </p>}
      <button onClick={handleTextChange}>Change text</button>
    </>
  );
};

export default Greeting;
