import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "./navbar/navbar";
import "./root-layout.css";

export const RootLayout = () => {
  return (
    <>
      <Navbar />
      <div id="detail" className="detail">
        <Outlet />
      </div>
    </>
  );
};
