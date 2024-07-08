import { t } from "i18next";
import React from "react";
import { BackgroundImage } from "../common/background-image/background-image";
import { Button } from "../common/button/button";
import "./home.css";

export const Home = () => {
  return (
    <main>
      <BackgroundImage bgImage={"hero"} overlayColor="black" />
      <BackgroundImage
        bgImage={"hero_saturno"}
        additionalClassname="hero-saturno"
      />
      <div className="hero-section">
        <div className="title-container">
          <p className="title-part-one">{t("hero_section.title.part_1")}</p>
          <p className="title-part-two">{t("hero_section.title.part_2")}</p>
        </div>
        <p className="text-hero">{t("hero_section.intro")}</p>
        <div className="call-to-action-container">
          <Button
            title="about_me"
            buttonStyleType="primary"
            onClick={() => {}}
          />
          <Button
            title="contact_me"
            buttonStyleType="agressive"
            onClick={() => {}}
          />
        </div>
      </div>
    </main>
  );
};
