import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { Outlet } from "react-router-dom";

const LazyNotFound = lazy(() => import("../pages/Errors/NotFound"));

export const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    children: [],
  },
  {
    path: "*",
    element: (
      <Suspense fallback={<h1>Rendering...</h1>}>
        <LazyNotFound />
      </Suspense>
    ),
  },
]);
