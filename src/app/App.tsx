import React from "react";

import { RecoilProvider, RouterProvider } from "./provider";

const App: React.FC = () => {
  return (
    <RecoilProvider>
      <RouterProvider />
    </RecoilProvider>
  );
};

export default App;
