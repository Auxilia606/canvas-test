import React from "react";

import { useStopWatch } from "@entities/StopWatch";

export const Home: React.FC = () => {
  const { formatTime, reset, start, stop } = useStopWatch();

  return (
    <div>
      stopwatch
      <p>{formatTime}</p>
      <button onClick={start}>start</button>
      <button onClick={stop}>stop</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};
