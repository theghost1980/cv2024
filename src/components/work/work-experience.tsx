import React from "react";
import { WORK_DATA_CARD_LIST } from "../../reference-data/work-data";
import {
  BackgroundImage,
  BgImageFileName,
} from "../common/background-image/background-image";
import ResponsiveGrid from "../common/responsive-grid/responsive-grid";
import "./work-experience.css";

export const WorkExperience = () => {
  return (
    <main className="work-page">
      <BackgroundImage
        bgImageFileName={BgImageFileName.WORK}
        overlayColor={{
          red: 235,
          blue: 237,
          green: 235,
          alpha: 0.9,
        }}
      />
      <section className="work-section">
        <ResponsiveGrid items={WORK_DATA_CARD_LIST} />
      </section>
    </main>
  );
};
