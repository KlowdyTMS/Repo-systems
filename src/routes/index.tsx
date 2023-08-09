import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Projects from "../pages/projects/Projects";

const LazyNotFound = lazy(() => import("../pages/errors/NotFound"));

export const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Projects />,
      },
      {
        path: ":secretary",
        element: <Projects />,
      },
    ],
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
