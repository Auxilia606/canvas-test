import React from "react";

import { RecoilProvider, RouterProvider, WorkerProvider } from "./provider";

const App: React.FC = () => {
  return (
    <RecoilProvider>
      <WorkerProvider />
      <RouterProvider />
    </RecoilProvider>
  );
};

export default App;
