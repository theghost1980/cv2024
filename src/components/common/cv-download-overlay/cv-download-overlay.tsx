import React from "react";
import { useTranslation } from "react-i18next";
import { downloadCV } from "../../../utils/get-in-touch.utils";
import { Icon, IconPathName } from "../icon/icon";
import "./cv-download-overlay.css";

const CvDownloadOverlay = () => {
  const { t } = useTranslation();
  return (
    <div className="download-cv-overlay">
      <div className="div-row-centered row">
        <h3 className="header-title-small title">
          {t("common.cv_download_title")}
        </h3>
        <Icon
          iconPathName={IconPathName.FLAG_UNITED_STATES}
          width={50}
          height={40}
          color="white"
          additionalClassName="margin-left-max margin-right-max"
          onClick={() => downloadCV("en")}
        />
        <Icon
          iconPathName={IconPathName.FLAG_VENEZUELA}
          width={50}
          height={40}
          color="white"
          onClick={() => downloadCV("es")}
        />
      </div>
    </div>
  );
};

export default CvDownloadOverlay;
