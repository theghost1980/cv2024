import React from "react";
import { ReactSVG } from "react-svg";
import "./icon.css";

export enum IconPathName {
  HAMBURGUER_MENU = "menu_navbar/hamburguer",
  CLOSE = "common/close",
  HOME = "menu_navbar/home",
  SATURN = "common/saturn",
  FLAG_TAIWAN = "flag/taiwan-flag",
  FLAG_COLOMBIA = "flag/colombia-flag",
  FLAG_UK = "flag/uk-flag",
  FLAG_VENEZUELA = "flag/venezuela-flag",
  FLAG_UNITED_STATES = "flag/united-states-flag",
  POSITION_INDICATOR = "common/position-indicator",
  TIME = "common/time",
  CHECK = "common/check",
  GITHUB = "common/github",
}

export enum LogoPathName {
  KEYCHAIN = "logo/keychain-logo",
  FREELANCE_WORK = "logo/freelance-work-logo",
}

interface Props {
  iconPathName: IconPathName | LogoPathName;
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
