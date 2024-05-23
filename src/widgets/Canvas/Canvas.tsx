import React, { useEffect, useRef } from "react";

import { useCanvasState } from "@shared/atom";

export const Canvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { setCanvasRef, state } = useCanvasState();

  useEffect(() => {
    setCanvasRef(canvasRef);
  }, [setCanvasRef]);

  return (
    <canvas
      onClick={() => {
        if (!canvasRef.current) return;

        const offscreenCanvas = canvasRef.current?.transferControlToOffscreen();

        state.workers[0].postMessage(
          {
            canvas: offscreenCanvas,
          },
          [offscreenCanvas]
        );
      }}
      ref={canvasRef}
      width="1080px"
      height="640px"
      className="bg-slate-500"
    />
  );
};
