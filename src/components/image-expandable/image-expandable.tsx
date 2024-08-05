import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./image-expandable.css";

interface Props {
  source: string;
  className: string;
}

const ImageExpandable = ({ className, source }: Props) => {
  const { t } = useTranslation();
  const [isFullView, setIsFullView] = useState(false);
  const [isImageLoading, setIsImageLoading] = useState(true);

  return (
    <>
      <img
        src={source}
        alt={source}
        className={`${className} ${
          isImageLoading ? "img-loading" : "img-loaded"
        }`}
        onClick={() => setIsFullView(true)}
        title={t("common.click_to_enlarge")}
        onLoad={() => setIsImageLoading(false)}
      />
      {isFullView && !isImageLoading && (
        <div className="full-overlay">
          <img
            src={source}
            alt={`${source}-full-image-view`}
            className="full-view-image border-orange-strong"
            onClick={() => setIsFullView(false)}
            title={t("common.click_to_close")}
          />
        </div>
      )}
    </>
  );
};

export default ImageExpandable;
