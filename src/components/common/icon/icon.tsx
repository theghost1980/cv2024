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
  TYPESCRIPT = "common/typescript",
  STACK = "common/stack",
  REACT = "common/react",
  JAVASCRIPT = "common/javascript",
  HTML_5 = "common/html-5",
  CSS_3 = "common/css-3",
  PAYPAL = "common/paypal",
  EMAIL = "common/email",
  GRAPHQL = "common/graphql",
  CONTENTFUL = "common/contentful",
  GATSBY = "common/gatsby",
  NETLIFY = "common/netlify",
  MONGO = "common/mongo",
  NODEJS = "common/nodejs",
  BLOCKCHAIN = "common/blockchain",
  HEROKU = "common/heroku",
  CDN = "common/cdn",
  JEST = "common/jest",
  RTL = "common/react-testing-library",
  WEBPACK = "common/webpack",
  ANDROID = "common/android",
  PLAYSTORE = "common/playstore",
  BOOTSTRAP = "common/bootstrap",
  SDK = "common/sdk",
  ANDROID_STUDIO = "common/android-studio",
  NPM = "common/npm",
  GITHUB_PAGES = "common/github-pages",
  JAVA = "common/java",
  FIGMA = "common/figma",
  CHROME = "common/chrome",
  FACEBOOK = "common/facebook",
  LINKEDIN = "common/linkedin",
  DOWNLOAD = "common/download",
  EXPAND = "common/expand",
  TRANSLATE = "common/translate",
  UFO = "common/ufo-spaceship",
  GIFT = "common/gift",
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
  title?: string;
}

export const Icon = ({
  width,
  height,
  color,
  onClick,
  iconPathName,
  additionalClassName,
  title,
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
      title={title}
    />
  );
};
