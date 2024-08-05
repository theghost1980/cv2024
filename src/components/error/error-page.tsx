import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import {
  BackgroundImage,
  BgImageFileName,
} from "../common/background-image/background-image";
import { Icon, IconPathName } from "../common/icon/icon";
import "./error-page.css";

const ErrorPage = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    initLangCheck();
  }, []);

  const initLangCheck = async () => {
    const prevLanguage = localStorage.getItem("cv_2024_lang");
    if (prevLanguage) {
      await i18n.changeLanguage(prevLanguage);
    }
  };

  return (
    <main className="error-page">
      <BackgroundImage
        bgImageFileName={BgImageFileName.ERROR}
        overlayColor={{ red: 230, blue: 230, green: 230, alpha: 0.2 }}
      />
      <div className="content-section">
        <Icon
          iconPathName={IconPathName.UFO}
          width={120}
          height={120}
          color="white"
          additionalClassName="ufo-icon"
        />
        <div className="text-container">
          <h2 className="header-title-small header text-centered">
            {t("error.page.header_1")}
          </h2>
          <h3 className="sub-header-title-italic sub-header">
            {t("error.page.subheader_1")}
          </h3>
          <h3 className="sub-header-title-italic sub-header point">
            - {t("error.page.point_1")}
          </h3>
          <h3 className="sub-header-title-italic sub-header point">
            - {t("error.page.point_2")}
          </h3>
        </div>
        <Icon
          iconPathName={IconPathName.HOME}
          width={80}
          height={80}
          color="var(--lighter-tone)"
          additionalClassName="left-margin"
          onClick={() => navigate("/")}
        />
      </div>
    </main>
  );
};

export default ErrorPage;
