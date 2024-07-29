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
      />
      {isFullView && (
        <div className="full-overlay">
          <img
            src={source}
            alt={`${source}-full-image-view`}
            className="full-view-image"
            onClick={() => setIsFullView(false)}
          />
        </div>
      )}
    </>
  );
};

export default ImageExpandable;
