import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type StopWatchStatus = {
  time: number;
  play: boolean;
  base: number;
};

export const useStopWatch = () => {
  const [status, setStatus] = useState<StopWatchStatus>({
    time: 0,
    base: 0,
    play: false,
  });
  const rAFId = useRef<number>(0);

  const start = useCallback(() => {
    setStatus((prev) => ({ ...prev, play: true }));
  }, []);

  const stop = useCallback(() => {
    setStatus((prev) => ({ ...prev, play: false }));
  }, []);

  const reset = useCallback(() => {
    setStatus((prev) => {
      if (prev.play) return prev;

      return { ...prev, base: 0 };
    });
  }, []);

  const frameRequestCallback: FrameRequestCallback = useCallback(
    (time: DOMHighResTimeStamp) => {
      setStatus((prev) => {
        if (prev.play)
          return {
            ...prev,
            time,
            base: prev.base + time - prev.time,
          };

        return {
          ...prev,
          time,
        };
      });

      rAFId.current = requestAnimationFrame(frameRequestCallback);
    },
    []
  );

  const formatTime = useMemo(() => {
    const target = status.base;
    const ms = Math.floor(target % 1000);
    const ss = Math.floor(target / 1000) % 60;
    const mm = Math.floor(target / 60 / 1000) % 60;
    const h = Math.floor(target / 60 / 60 / 1000) % 60;

    let result = "";

    result += `${h}`;
    result += ":";

    mm < 10 ? (result += `0${mm}`) : (result += `${mm}`);
    result += ":";
    ss < 10 ? (result += `0${ss}`) : (result += `${ss}`);
    result += ":";
    ms < 10
      ? (result += `00${ms}`)
      : ms < 100
      ? (result += `0${ms}`)
      : (result += `${ms}`);

    return result;
  }, [status.base]);

  useEffect(() => {
    rAFId.current = requestAnimationFrame(frameRequestCallback);
  }, [frameRequestCallback]);

  return { start, stop, reset, formatTime };
};
