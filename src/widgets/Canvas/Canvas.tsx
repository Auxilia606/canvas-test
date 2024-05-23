import React, { useEffect, useRef } from "react";

import { useCanvasState } from "@shared/atom";

export const Canvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { setCanvasRef, state } = useCanvasState();

  useEffect(() => {
    setCanvasRef(canvasRef);
  }, [setCanvasRef]);

  useEffect(() => {
    if (!canvasRef.current || state.workers.length === 0) return;

    const offscreenCanvas = canvasRef.current?.transferControlToOffscreen();

    state.workers[0].postMessage(
      {
        type: "init",
        canvas: offscreenCanvas,
      },
      [offscreenCanvas]
    );
  }, [state.workers]);

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
      style={{ border: "1px solid black" }}
    />
  );
};
