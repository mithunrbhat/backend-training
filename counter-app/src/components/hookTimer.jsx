import React, { useState, useEffect } from "react";

const HookTimer = () => {
  const [timer, setTimer] = useState(0);

  const tick = () => {
    setTimer(timer + 1);
  };
  useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [timer]);

  return <div>{timer}</div>;
};

export default HookTimer;
