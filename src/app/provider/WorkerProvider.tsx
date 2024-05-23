import React from "react";

import { useWorker } from "../worker";

export const WorkerProvider: React.FC = () => {
  useWorker();

  return null;
};
