import { t } from "i18next";
import React from "react";
import {
  BackgroundImage,
  BgImageFileName,
} from "../common/background-image/background-image";
import { Icon, IconPathName } from "../common/icon/icon";
import "./get-in-touch.css";

const GetInTouch = () => {
  return (
    <main className="get-in-touch-page">
      <BackgroundImage
        bgImageFileName={BgImageFileName.CONTACT}
        overlayColor={{
          red: 235,
          blue: 237,
          green: 235,
          alpha: 0.2,
        }}
      />
      <BackgroundImage
        bgImageFileName={BgImageFileName.GET_IN_TOUCH_SATURNO}
        additionalClassname="saturno-overlay"
      />
      <section className="contact-section">
        <div className="contact-divider">
          <div className="contact-info">
            <div className="text-centered">
              <h3 className="header-title-small title-1">
                {t("contact.title_1")}
              </h3>
              <h4 className="text-content-soft title-2">
                {t("contact.title_2")}
              </h4>
              <p className="text-decription disclaimer text-centered text-shadow-light">
                {t("contact.disclaimer")}
              </p>
            </div>
            <div className="sub-content">
              <ul className="ul-list-row">
                <li>
                  <Icon
                    iconPathName={IconPathName.FACEBOOK}
                    width={40}
                    height={40}
                    color="var(--ceruleo-medium)"
                  />
                </li>
                <li>
                  <Icon
                    iconPathName={IconPathName.LINKEDIN}
                    width={40}
                    height={40}
                    color="var(--ceruleo-medium)"
                  />
                </li>
                <li>
                  <Icon
                    iconPathName={IconPathName.GITHUB}
                    width={40}
                    height={40}
                    color="var(--ceruleo-medium)"
                  />
                </li>
                <li>
                  <Icon
                    iconPathName={IconPathName.DOWNLOAD}
                    width={40}
                    height={40}
                    color="var(--ceruleo-medium)"
                  />
                </li>
              </ul>
            </div>
          </div>
          <div className="contact-form"></div>
        </div>
      </section>
    </main>
  );
};

export default GetInTouch;
