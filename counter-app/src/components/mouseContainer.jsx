import React, { useState } from "react";
import HookMouse from "./hookMouse";

const MOuseContainer = () => {
  const [display, setDisplay] = useState(true);

  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle</button>
      {display && <HookMouse />}
    </div>
  );
};

export default MOuseContainer;
