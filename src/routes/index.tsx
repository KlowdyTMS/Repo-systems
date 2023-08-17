/* eslint-disable react-refresh/only-export-components */
import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";

const LazyNotFound = lazy(() => import("../pages/errors/NotFound"));
const LazyProjects = lazy(() => import("../pages/projects/Projects"));
const LazyProjectsBySecretary = lazy(
  () => import("../pages/projects/ProjectsBySecretary")
);

export const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<h1>Rendering...</h1>}>
            <LazyProjects />
          </Suspense>
        ),
      },
      {
        path: "secretarias/:secretary",
        element: (
          <Suspense fallback={<h1>Rendering...</h1>}>
            <LazyProjectsBySecretary />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: (
          <Suspense fallback={<h1>Rendering...</h1>}>
            <LazyNotFound />
          </Suspense>
        ),
      },
    ],
  },
]);
