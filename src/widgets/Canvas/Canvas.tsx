import React, { useEffect, useRef } from "react";

import { useCanvasState } from "@shared/atom";

export const Canvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { setCanvasRef } = useCanvasState();

  useEffect(() => {
    setCanvasRef(canvasRef);
  }, [setCanvasRef]);

  return (
    <canvas
      ref={canvasRef}
      className="bg-slate-500"
      style={{
        width: 320,
        height: 640,
      }}
    />
  );
};
