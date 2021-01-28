import React, { useContext } from "react";
import { CountContext } from "./Apple";

const ComponentC = () => {
  //   const count = useContext(CountContext.count);
  const countContext = useContext(CountContext);
  return (
    <div>
      <p>component-c</p>
      <button onClick={() => countContext.dispatch({ type: "increment" })}>
        Increment
      </button>
      <button onClick={() => countContext.dispatch({ type: "decrement" })}>
        Decrement
      </button>
      <button onClick={() => countContext.dispatch({ type: "reset" })}>
        Reset
      </button>
    </div>
  );
};

export default ComponentC;
