import React from "react";
import {
  BackgroundImage,
  BgImageFileName,
} from "../common/background-image/background-image";
import "./about.css";

export const About = () => {
  return (
    <main>
      <BackgroundImage
        bgImageFileName={BgImageFileName.ABOUT_ME}
        overlayColor={{
          red: 220,
          blue: 220,
          green: 220,
          alpha: 0.5,
        }}
      />
      <div className="about">//TODO</div>
    </main>
  );
};
