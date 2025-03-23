import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../store/counterSlice.js';

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector(state => state.counter.value);

  return (
    <div>
      <button onClick={() => dispatch(decrement())}>
        Decrement
      </button>
      <span>{count}</span>
      <button onClick={() => dispatch(increment())}>
        Increment
      </button>
    </div>
  )
}

export default Counter