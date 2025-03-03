import { useState } from "react";

function Counter(props) {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1)
  }

  function decrement() {
    setCount(count - 1 < 0 ? 0 : count - 1)
  }

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span
        style={{ paddingLeft: '10px', paddingRight: '10px' }}
      >
        {count}
      </span>
      <button onClick={increment}>+</button>
      <input
        value={props.title}
        onChange={(e) => props.setTitle(e.target.value)}
      />
      {props.label}
    </div>
  );
};

export default Counter;