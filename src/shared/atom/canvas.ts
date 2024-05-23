import { useCallback } from "react";

import { atom, useRecoilState } from "recoil";

type CanvasState = {
  canvasRef: React.RefObject<HTMLCanvasElement> | null;
};

const canvasState = atom<CanvasState>({
  key: "canvasState",
  default: { canvasRef: null },
});

export const useCanvasState = () => {
  const [state, setState] = useRecoilState(canvasState);

  const setCanvasRef = useCallback(
    (canvasRef: CanvasState["canvasRef"]) => {
      setState((prev) => ({ ...prev, canvasRef }));
    },
    [setState]
  );

  return { state, setCanvasRef };
};
