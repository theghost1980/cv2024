import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./app.css";
import { About } from "./components/about/about";
import { Home } from "./components/home/home";
import { RootLayout } from "./components/layout/root-layout";
import { WorkExperience } from "./components/work/work-experience";
import "./i18n/config";

//TODO important after finishing the website:
//  - upload using netlify use same name as the one: https://saturnomangieri.netlify.app/
//    - test in mobile & desktop & home TV
//  - make a new CV based on same website design(content, design) and add download option.

//TODO bellow define enum for routes.
//TODO error page
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/work-experience",
        element: <WorkExperience />,
      },
    ],
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
