import React from "react";
import {
  BackgroundImage,
  BgImageFileName,
} from "../common/background-image/background-image";

export const WorkExperience = () => {
  return (
    <main>
      <BackgroundImage
        bgImageFileName={BgImageFileName.WORK}
        overlayColor={{
          red: 235,
          blue: 237,
          green: 235,
          alpha: 0.8,
        }}
      />
      <div className="about">//TODO</div>
    </main>
  );
};
