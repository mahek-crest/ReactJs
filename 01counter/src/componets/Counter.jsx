const Counter = ({ onAdd, onMinus, counter }) => {
  return (
    <>
      <button onClick={onMinus} className="btn">
        -
      </button>
      <p>{counter}</p>
      <button onClick={onAdd} className="btn">
        +
      </button>
    </>
  );
};

export default Counter;
