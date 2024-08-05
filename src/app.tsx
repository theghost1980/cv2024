import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./app.css";
import { About } from "./components/about/about";
import ErrorPage from "./components/error/error-page";
import Faq from "./components/faq/faq";
import GetInTouch from "./components/get-in-touch/get-in-touch";
import { Home } from "./components/home/home";
import { RootLayout } from "./components/layout/root-layout";
import Projects from "./components/projects/projects";
import { WorkExperience } from "./components/work/work-experience";
import "./i18n/config";

//TODO important after finishing the website:
//  - upload using netlify use same name as the one: https://saturnomangieri.netlify.app/
//  - test img loading to see if needed an image placeholder while images are loading.
//  - make a new CV based on same website design(content, design) and add download option.

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
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
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/get-in-touch",
        element: <GetInTouch />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
    ],
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
