import { useState } from "react";
import "./App.css";
import Toggle from "./components/Toggle";

function App() {
  const [isOn, setIsOn] = useState(false);
  const number = 9;
  const handleBtn = () => {
    setIsOn((on) => !on);
  };

  return (
    <>
      <p>hello</p>
      <Toggle onBtnClick={handleBtn} value={isOn} number={number} />
    </>
  );
}

export default App;
