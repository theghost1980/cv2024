import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { RouteEnum } from "../../enums/routes.enum";
import {
  BackgroundImage,
  BgImageFileName,
} from "../common/background-image/background-image";
import { Button } from "../common/button/button";
import "./home.css";

export const Home = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <main>
      <BackgroundImage
        bgImageFileName={BgImageFileName.HERO}
        overlayColor={{ red: 19, blue: 19, green: 19, alpha: 0.4 }}
      />
      <BackgroundImage
        bgImageFileName={BgImageFileName.HERO_SATURNO}
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
            onClick={() => navigate(RouteEnum.ABOUT)}
          />
          <Button
            title="contact_me"
            buttonStyleType="agressive"
            onClick={() => navigate(RouteEnum.CONTACT)}
          />
        </div>
      </div>
    </main>
  );
};
