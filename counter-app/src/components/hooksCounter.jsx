import React, { Component, useState } from "react";

const HookCounter = () => {
  const initialCount = 1;
  const [count, setCount] = useState(initialCount);

  if (count <= 0) {
    document.getElementsByTagName("button")[1].setAttribute("desabled", "true");
  }
  return (
    <div>
      <h1>Count {count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
      <button onClick={() => setCount((count) => count - 1)}>Decrement</button>
      <button onClick={() => setCount(initialCount)}>Reset</button>
    </div>
  );
};

export default HookCounter;
