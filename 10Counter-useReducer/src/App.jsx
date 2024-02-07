import { useReducer } from "react";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return (state += 1);
      case "decrement":
        return (state -= 1);
      default:
        return state;
    }
  };

  const [count, dispatchCount] = useReducer(reducer, 0);

  const handleIncrement = () => {
    dispatchCount({ type: "increment" });
  };

  const handleDerement = () => {
    dispatchCount({ type: "decrement" });
  };

  return (
    <>
      <h1>Counter using useRducer </h1>
      <Counter
        handleDerement={handleDerement}
        handleIncrement={handleIncrement}
        count={count}
      />
    </>
  );
}

export default App;
