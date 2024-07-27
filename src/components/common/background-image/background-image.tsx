import React from "react";
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
  const renderOverlay = () => {
    const { red, green, blue, alpha } = overlayColor;
    return (
      <div
        id="bg_overlay"
        style={{
          display: "block",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: `rgba(${red},${green},${blue},${alpha})`,
          zIndex: 1,
        }}
      />
    );
  };

  return (
    <div
      className={`bg-image-container ${additionalClassname}`}
      style={{
        backgroundImage: `url(./assets/images/bg/${bgImageFileName})`,
      }}
    >
      {overlayColor && renderOverlay()}
    </div>
  );
};
