import React, { useReducer } from "react";

const initialState = { binaryCounter: 0 };
const reducer = (state, action) => {
  switch (action.type) {
    case "apply":
      return { binaryCounter: state.binaryCounter + action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const ReduserCounter = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);

  return (
    <div>
      <span>
        <div>Count - {count.binaryCounter}</div>
        <button onClick={() => dispatch({ type: "apply", value: 8 })}>8</button>
        <button onClick={() => dispatch({ type: "apply", value: 4 })}>4</button>
        <button onClick={() => dispatch({ type: "apply", value: 2 })}>2</button>
        <button onClick={() => dispatch({ type: "apply", value: 1 })}>1</button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </span>
      <span>
        <div>Count - {countTwo.binaryCounter}</div>
        <button onClick={() => dispatchTwo({ type: "apply", value: 8 })}>
          8
        </button>
        <button onClick={() => dispatchTwo({ type: "apply", value: 4 })}>
          4
        </button>
        <button onClick={() => dispatchTwo({ type: "apply", value: 2 })}>
          2
        </button>
        <button onClick={() => dispatchTwo({ type: "apply", value: 1 })}>
          1
        </button>
        <button onClick={() => dispatchTwo({ type: "reset" })}>Reset</button>
      </span>
    </div>
  );
};

export default ReduserCounter;
