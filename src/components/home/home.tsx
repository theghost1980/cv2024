import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { RouteEnum } from "../../enums/routes.enum";
import { Button } from "../common/button/button";
import { Icon, IconPathName } from "../common/icon/icon";
import BgOverlay from "../common/overlay/bg-overlay";
import OverlayModal from "../common/overlay/overlay-modal";
import "./home.css";

//TODO
// - trabajar la idea de mas dinamismo en la home.
//    - ref: https://wpdean.com/css-text-animation/
//    - posible: Slide with Me, para un texto central.
//    - agrandar botones y forma
//    - posible "beyond code" usando Cool Beans Text Moves. (https://codepen.io/hkmDesigner/pen/zwJPgL)

export const Home = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [isMusicOverlayOpened, setIsMusicOverlayOpened] = useState(false);

  return (
    <main>
      {/* <BackgroundImage
        bgImageFileName={BgImageFileName.HERO}
        overlayColor={{ red: 19, blue: 19, green: 19, alpha: 0.4 }}
      /> */}
      {/* <BackgroundImage
        bgImageFileName={BgImageFileName.HERO_SATURNO}
        additionalClassname="hero-saturno"
      /> */}
      <video className="background-video" loop autoPlay muted>
        <source src="./assets/videos/home_bg_squares.mp4" type="video/mp4" />
        {/* <source src="http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4" type="video/ogg" /> */}
        Your browser does not support the video tag.
      </video>
      <BgOverlay overlayColor={{ red: 19, blue: 19, green: 19, alpha: 0.4 }} />
      <div className="hero-section">
        <div className="title-container">
          <p className="title-part-two animate-characters">
            {t("hero_section.title.part_2")}{" "}
          </p>
          <p className="title-part-one">{t("hero_section.title.part_1")}</p>
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
          <Icon
            iconPathName={IconPathName.GIFT}
            width={50}
            height={50}
            color="white"
            onClick={() => setIsMusicOverlayOpened(!isMusicOverlayOpened)}
          />
        </div>
      </div>
      {isMusicOverlayOpened && (
        <OverlayModal onBackClick={() => setIsMusicOverlayOpened(false)} />
      )}
    </main>
  );
};
