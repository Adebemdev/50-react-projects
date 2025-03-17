import { useState } from 'react';
import './style.css';

const Counter = () => {
  const [count, setCount] = useState(0);

  const onHandleIncrement = () => {
    setCount(count + 1);
  };
  const onHandleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="container">
      <div>
        <h1 className="number">{count}</h1>
      </div>

      <div className="btns-container">
        <button onClick={onHandleIncrement} className="increment">
          +
        </button>
        <button onClick={onHandleDecrement} className="increment">
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
