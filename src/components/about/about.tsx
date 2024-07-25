import React from "react";
import {
  BackgroundImage,
  BgImageFileName,
} from "../common/background-image/background-image";
import ImageSlider from "../common/image-slider/image-slider";
import "./about.css";

export const About = () => {
  return (
    <main className="about-page">
      <BackgroundImage
        bgImageFileName={BgImageFileName.ABOUT_ME}
        overlayColor={{
          red: 220,
          blue: 220,
          green: 220,
          alpha: 0.9,
        }}
      />
      <div className="about">
        <div className="section-container">
          <ImageSlider />
        </div>
      </div>
    </main>
  );
};
