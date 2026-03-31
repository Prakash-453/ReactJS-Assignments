import React, { useState } from "react";
import "./index.css";

function Counterr() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter-container">
      <h1>Counter : {count}</h1>
      <div className="button-container">
        <button onClick={handleIncrement} className="btn">Increment</button>
        <button onClick={handleDecrement} className="btn">Decrement</button>
      </div>
    </div>
  );
}

export default Counterr;
