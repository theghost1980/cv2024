import React from "react";
import BgOverlay from "../overlay/bg-overlay";
import "./background-image.css";

//TODO create enum file, move
export enum BgImageFileName {
  HERO = "hero.jpg",
  HERO_SATURNO = "hero_saturno.png",
  HOME_OFFICE = "home_office.jpg",
  ABOUT_ME = "about_venezuela.jpg",
  WORK = "work_experience.jpg",
  KEYCHAIN_CARD = "/cards/keychain-card.png",
  HIVE_KEYCHAIN_CARD = "/cards/hive-keychain-card.png",
  ECCEL_CARD = "/cards/eccel-card.png",
  ENA_CARD = "/cards/ena-card.jpg",
  FREELANCE_CARD = "/cards/freelance-card.png",
  BLOCKVEN_CARD = "/cards/blockven-card.png",
  ROCCO_WEBSITE = "/cards/rocco-website.png",
  OLD_PORTFOLIO_WEBSITE = "/cards/old-portfolio-website.png",
  JOBABOARD_WEBSITE = "/cards/jobaboard-website.png",
  NANSYSTEMS_WEBSITE = "/cards/nansystems-website.png",
  LANDING_WEBSITE = "/cards/landing-website.png",
  KEYCHAIN_CI = "/cards/keychain-ci.webp",
  KEYCHAIN_STORE = "/cards/keychain-store.png",
  KEYCHAIN_PLAYGROUND = "/cards/keychain-playground-website.png",
  KEYCHAIN_WIDGET_WEBSITE = "/cards/keychain-widget-website.png",
  KEYCHAIN_SDK = "/cards/keychain-sdk.png",
  KEYCHAIN_TUTORIAL_WEBSITE = "/cards/keychain-tutorial-website.png",
  KEYCHAIN_MOBILE_WIDGETS = "/cards/keychain-mobile-widgets.png",
  KEYCHAIN_MOBILE_NEWUI = "/cards/keychain-mobile-newui.webp",
  KEYCHAIN_EXTENSION_PORTFOLIO = "/cards/keychain-extension-portfolio.png",
  FIRST_CV_PORTFOLIO = "/cards/first-cv-portfolio.png",
}

interface Props {
  bgImageFileName: BgImageFileName;
  additionalClassname?: string;
  overlayColor?: {
    red: number;
    green: number;
    blue: number;
    alpha: number;
  };
}

export const BackgroundImage = ({
  bgImageFileName,
  additionalClassname,
  overlayColor,
}: Props) => {
  return (
    <div
      className={`bg-image-container ${additionalClassname}`}
      style={{
        backgroundImage: `url(./assets/images/bg/${bgImageFileName})`,
      }}
    >
      {overlayColor && <BgOverlay overlayColor={overlayColor} />}
    </div>
  );
};
