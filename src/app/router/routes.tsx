import { createBrowserRouter, Navigate } from "react-router-dom";

import { Home } from "@pages/Home";

export const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "*",
    element: <Navigate replace to="/home" />,
  },
]);
