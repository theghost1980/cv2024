import { t } from "i18next";
import React, { useState } from "react";
import "./image-expandable.css";

interface Props {
  source: string;
  className: string;
}

const ImageExpandable = ({ className, source }: Props) => {
  const [isFullView, setIsFullView] = useState(false);

  return (
    <>
      <img
        src={source}
        alt={source}
        className={className}
        onClick={() => setIsFullView(true)}
        title={t("common.click_to_enlarge")}
      />
      {isFullView && (
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
