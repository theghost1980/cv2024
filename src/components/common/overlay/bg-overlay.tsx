import React from "react";

interface Props {
  overlayColor: {
    red: number;
    green: number;
    blue: number;
    alpha: number;
  };
  additionalClassname?: string;
}

const BgOverlay = ({ overlayColor, additionalClassname }: Props) => {
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
      className={additionalClassname}
    />
  );
};

export default BgOverlay;
