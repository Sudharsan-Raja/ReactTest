import React, { useState } from "react";
import "./AppStyle.css";

function App() {
  // Define a state variable for the counter
  const [count, setCount] = useState(0);

  // Function to handle the increment button click
  const increment = () => {
    setCount(count + 1);
  };

  // Function to handle the decrement button click
  const decrement = () => {
    setCount(count - 1);
  };

  // Function to handle the reset button click
  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter-container">
      <h1>Simple Counter App</h1>
      <h2>{count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement} className="decrement">
        Decrement
      </button>
      <button onClick={reset} className="reset">
        Reset
      </button>
    </div>
  );
}

export default App;
