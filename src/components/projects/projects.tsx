import React from "react";
import { PROJECTS_DATA_CARD_LIST } from "../../reference-data/projects-data";
import {
  BackgroundImage,
  BgImageFileName,
} from "../common/background-image/background-image";
import ResponsiveGrid from "../common/responsive-grid/responsive-grid";
import "./projects.css";

const Projects = () => {
  return (
    <main className="projects-page">
      <BackgroundImage
        bgImageFileName={BgImageFileName.WORK}
        overlayColor={{
          red: 235,
          blue: 237,
          green: 235,
          alpha: 0.9,
        }}
      />
      <section className="projects-section">
        <ResponsiveGrid
          items={PROJECTS_DATA_CARD_LIST}
          removeGradientOverlay={"no-overlay-gradient"}
          minAlpha
        />
      </section>
    </main>
  );
};

export default Projects;
