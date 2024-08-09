import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./app.css";
import { About } from "./components/about/about";
import ErrorPage from "./components/error/error-page";
import Faq from "./components/faq/faq";
import GetInTouch from "./components/get-in-touch/get-in-touch";
import { Home } from "./components/home/home";
import { RootLayout } from "./components/layout/root-layout";
import Projects from "./components/projects/projects";
import { WorkExperience } from "./components/work/work-experience";
import { RouteEnum } from "./enums/routes.enum";
import "./i18n/config";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path={RouteEnum.ABOUT} element={<About />} />
      <Route path={RouteEnum.WORK} element={<WorkExperience />} />
      <Route path={RouteEnum.PROJECT} element={<Projects />} />
      <Route path={RouteEnum.CONTACT} element={<GetInTouch />} />
      <Route path={RouteEnum.FAQ} element={<Faq />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

export const App = () => {
  return <RouterProvider router={router} />;
};
