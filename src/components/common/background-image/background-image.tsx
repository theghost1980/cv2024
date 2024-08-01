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
