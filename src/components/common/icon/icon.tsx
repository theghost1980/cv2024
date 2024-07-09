import React from "react";
import { ReactSVG } from "react-svg";
import "./icon.css";

export enum IconPathName {
  HAMBURGUER_MENU = "menu_navbar/hamburguer",
  CLOSE = "common/close",
  HOME = "menu_navbar/home",
}

interface Props {
  iconPathName: IconPathName;
  width: number;
  height: number;
  color: string;
  onClick?: () => void;
  additionalClassName?: string;
}

export const Icon = ({
  width,
  height,
  color,
  onClick,
  iconPathName,
  additionalClassName,
}: Props) => {
  const addedStyles = `width: ${width}px; height: ${height}px; color:${color}; ${
    onClick ? "cursor:pointer;" : ""
  }`;

  return (
    <ReactSVG
      src={`./assets/images/svg/${iconPathName}.svg`}
      beforeInjection={(svg) => {
        if (onClick) {
          svg.classList.add("hover-animation");
        }
        svg.setAttribute("style", addedStyles);
      }}
      onClick={onClick}
      className={additionalClassName}
    />
  );
};
