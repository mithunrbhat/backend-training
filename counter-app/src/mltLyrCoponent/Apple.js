import React, { useReducer } from "react";
import ComponentC from "./ComponentC";
import ComponentA from "./ComponentA";

export const CountContext = React.createContext();
const initialState = {
  firstCounter: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { firstCounter: state.firstCounter + 1 };
    case "decrement":
      return { firstCounter: state.firstCounter - 1 };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const Apple = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <CountContext.Provider value={{ count, dispatch }}>
      <div>
        <h1>Count - {count.firstCounter}</h1>
        <ComponentA />
        <ComponentC />
      </div>
    </CountContext.Provider>
  );
};

export default Apple;
