import React from "react";

function Counter({ count, handleDerement, handleIncrement }) {
  return (
    <>
      <h2>{count}</h2>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDerement}>-</button>
    </>
  );
}

export default Counter;
