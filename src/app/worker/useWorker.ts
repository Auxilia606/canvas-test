import { useEffect } from "react";

import { useCanvasState } from "@shared/atom";

export const useWorker = () => {
  const { state, setWorkers } = useCanvasState();

  useEffect(() => {
    if (state.workers.length === 0) {
      setWorkers(
        new Array(2)
          .fill(null)
          .map(() => new Worker(new URL("./CanvasWorker.ts", import.meta.url)))
      );
    }

    return () => {
      state.workers.forEach((worker) => worker.terminate());
    };
  }, [setWorkers, state.workers]);
};
