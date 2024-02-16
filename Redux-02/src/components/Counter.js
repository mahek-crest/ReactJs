import classes from './Counter.module.css';
import { increment, decrement } from '../store/counterSlice';
import { useDispatch, useSelector } from 'react-redux';

const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector((state) => state.counter)

  const incrementHandler = () => {
    dispatch(increment())
  }

  const decrementHandler = () => {
    dispatch(decrement())
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increase</button>
        <button onClick={decrementHandler}>Decrease</button>
      </div>
    </main>
  );
};

export default Counter;
