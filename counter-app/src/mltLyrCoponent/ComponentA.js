import React, { useContext } from "react";
import { CountContext } from "./Apple";

const ComponentA = () => {
  //   const count = useContext(CountContext.count);
  const countContext = useContext(CountContext);
  return (
    <div>
      <p>component-a</p>
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

export default ComponentA;
