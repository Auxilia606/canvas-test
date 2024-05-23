import { useCallback } from "react";

import { atom, useRecoilState } from "recoil";

type CanvasState = {
  canvasRef: React.RefObject<HTMLCanvasElement> | null;
  workers: Worker[];
};

const canvasState = atom<CanvasState>({
  key: "canvasState",
  default: { canvasRef: null, workers: [] },
});

export const useCanvasState = () => {
  const [state, setState] = useRecoilState(canvasState);

  const setCanvasRef = useCallback(
    (canvasRef: CanvasState["canvasRef"]) => {
      setState((prev) => ({ ...prev, canvasRef }));
    },
    [setState]
  );

  const setWorkers = useCallback(
    (workers: CanvasState["workers"]) => {
      setState((prev) => ({ ...prev, workers }));
    },
    [setState]
  );

  return { state, setCanvasRef, setWorkers };
};
