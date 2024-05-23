type CanvasEvent = {
  canvas: OffscreenCanvas;
};

type BallParams = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
};

self.addEventListener("message", async (event: MessageEvent<CanvasEvent>) => {
  const {
    data: { canvas },
  } = event;

  if (!canvas) return;

  const context = canvas.getContext("2d");

  if (!context) return;

  const makeBall = (params: BallParams) => {
    let { color, radius, vx, vy, x, y } = params;

    const setParams = (param: Partial<BallParams>) => {
      vx = param.vx ?? vx;
      vy = param.vy ?? vy;
      color = param.color ?? color;
      radius = param.radius ?? radius;
      x = param.x ?? x;
      y = param.y ?? y;
    };

    const move = () => {
      x += vx;
      y += vy;
    };

    const draw = () => {
      if (y + vy > canvas.height || y + vy < 0) {
        vy = -vy;
      }
      if (x + vx > canvas.width || x + vx < 0) {
        vx = -vx;
      }

      context.beginPath();
      context.arc(x, y, radius, 0, Math.PI * 2, true);
      context.closePath();
      context.fillStyle = color;
      context.fill();

      console.log(x, y, vx, vy);
    };

    return { setParams, move, draw };
  };

  const ball = makeBall({
    x: 50,
    y: 80,
    vx: 2,
    vy: 2,
    radius: 10,
    color: "blue",
  });

  const rAFDraw = () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    ball.draw();
    ball.move();
    self.requestAnimationFrame(rAFDraw);
  };

  self.requestAnimationFrame(rAFDraw);
  ball.draw();
});
