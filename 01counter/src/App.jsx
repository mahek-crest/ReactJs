import Container from "./componets/Container";
import Counter from "./componets/Counter";
import "./App.css";
import { useState } from "react";
import Message from "./componets/MessageBox";
import MessageBox from "./componets/MessageBox";

const App = () => {
  // let num = 2;

  let [number, setNumber] = useState(0);

  const handleAddBtn = () => {
    let newNum = (number += 1);
    setNumber(newNum);
  };

  const handleMinusBtn = () => {
    let newNum = (number -= 1);
    setNumber(newNum);
  };

  return (
    <>
      <p>hello</p>
      <Container>
        <Counter
          onAdd={handleAddBtn}
          onMinus={handleMinusBtn}
          counter={number}
        />
      </Container>
      <MessageBox counter={number} />
    </>
  );
};

export default App;
