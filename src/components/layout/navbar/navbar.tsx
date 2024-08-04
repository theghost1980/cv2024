import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import { downloadCV } from "../../../utils/get-in-touch.utils";
import {
  BackgroundImage,
  BgImageFileName,
} from "../../common/background-image/background-image";
import { Button } from "../../common/button/button";
import { Icon, IconPathName } from "../../common/icon/icon";
import { Separator } from "../../common/separator/separator";
import "./navbar.css";

export interface CTAButtonData {
  title: string;
  to?: string;
  action?: () => void;
}

interface Props {
  classname?: string;
  handleSwitchTranslation: () => void;
}

export const Navbar = ({
  classname = "floating",
  handleSwitchTranslation,
}: Props) => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [classByRoute, setClassByRoute] = useState<string>("");
  const [desktopMenuProps, setDesktopMenuProps] = useState<{
    pageTitle: string;
    linkOne: {
      title: string;
      to: string;
    };
    linkTwo: {
      title: string;
      to: string;
    };
    ctaButton: CTAButtonData;
  }>();

  const { t } = useTranslation();
  const navigate = useNavigate();
  let location = useLocation();

  useEffect(() => {
    console.log(location);
    //TODO bellow add a reference data folder + file to bring selected route page data
    // TODO and fix these logic, refactor
    if (location && location.pathname.includes("about")) {
      setClassByRoute("desktop-view");
      setDesktopMenuProps({
        pageTitle: "navigation.page_title.about_me",
        linkOne: {
          title: "common.work",
          to: "/work-experience",
        },
        linkTwo: {
          title: "common.projects",
          to: "/projects",
        },
        ctaButton: {
          title: "my_design_process",
          to: "/zero-to-hero",
        },
      });
    } else if (location && location.pathname.includes("work")) {
      setClassByRoute("desktop-view");
      setDesktopMenuProps({
        pageTitle: "navigation.page_title.work_experience",
        linkOne: {
          title: "common.projects",
          to: "/projects",
        },
        linkTwo: {
          title: "button.about_me",
          to: "/about",
        },
        ctaButton: {
          title: "contact_me",
          to: "/get-in-touch",
        },
      });
    } else if (
      location &&
      (location.pathname.includes("projects") ||
        location.pathname.includes("faq"))
    ) {
      setClassByRoute("desktop-view");
      setDesktopMenuProps({
        pageTitle: "navigation.page_title.projects",
        linkOne: {
          title: "common.work",
          to: "/work-experience",
        },
        linkTwo: {
          title: "button.about_me",
          to: "/about",
        },
        ctaButton: {
          title: "contact_me",
          to: "/get-in-touch",
        },
      });
    } else if (location && location.pathname.includes("get-in-touch")) {
      setClassByRoute("desktop-view");
      setDesktopMenuProps({
        pageTitle: "navigation.page_title.get_in_touch",
        linkOne: {
          title: "common.work",
          to: "/work-experience",
        },
        linkTwo: {
          title: "common.projects",
          to: "/projects",
        },
        ctaButton: {
          title: "download_cv",
          action: downloadCV,
        },
      });
    }
  }, [location]);

  const handleNavigate = (to: string) => {
    navigate(to);
    setClassByRoute("");
    setIsOpen(false);
  };

  const handleActionOrNavigate = (ctaButton: CTAButtonData) => {
    if (ctaButton.action) return ctaButton.action();
    if (ctaButton.to) handleNavigate(ctaButton.to);
  };

  return (
    <nav
      className={`${classname} ${
        isOpen ? "full-height" : "adjust-top"
      } ${classByRoute}`}
    >
      {/* Menu desktop */}
      {!isOpen && classByRoute === "desktop-view" && (
        <div className="nav-bar-desktop">
          <div className="nav-row">
            <div className="row-left">
              <Icon
                iconPathName={IconPathName.HOME}
                width={40}
                height={40}
                color="rgb(22, 160, 184);"
                additionalClassName="left-margin"
                onClick={() => handleNavigate("/")}
              />
              <div className="nav-page-title">
                {t(desktopMenuProps.pageTitle)}
              </div>
            </div>
            <div className="row-right">
              <div
                className="nav-menu-title energy"
                onClick={() => handleNavigate(desktopMenuProps.linkOne.to)}
              >
                {t(desktopMenuProps.linkOne.title)}
              </div>
              <div
                className="nav-menu-title moody"
                onClick={() => handleNavigate(desktopMenuProps.linkTwo.to)}
              >
                {t(desktopMenuProps.linkTwo.title)}
              </div>
              <Button
                title={desktopMenuProps.ctaButton.title}
                buttonStyleType={"secondary"}
                onClick={() => {
                  handleActionOrNavigate(desktopMenuProps.ctaButton);
                }}
                //TODO decide if making it same as about...
                additionalClassname="button-my-design"
              />
              <Icon
                iconPathName={IconPathName.HAMBURGUER_MENU}
                width={40}
                height={40}
                color="rgb(22, 160, 184);"
                onClick={() => setIsOpen(!isOpen)}
              />
            </div>
          </div>
          <div className="draw-bottom-line" />
        </div>
      )}
      {/* end menu desktop */}

      {/* Menu mobile */}
      {!isOpen && classByRoute !== "desktop-view" && (
        <Icon
          iconPathName={IconPathName.HAMBURGUER_MENU}
          width={60}
          height={60}
          color="white"
          onClick={() => setIsOpen(!isOpen)}
        />
      )}
      {/* end menu mobile */}

      {/* Menu opened */}
      {isOpen && (
        <BackgroundImage
          bgImageFileName={BgImageFileName.HOME_OFFICE}
          overlayColor={{
            red: 14,
            green: 135,
            blue: 160,
            alpha: 0.5,
          }}
        />
      )}
      <div className={`menu-${isOpen ? "opened" : "closed"}`}>
        <Icon
          iconPathName={IconPathName.TRANSLATE}
          width={30}
          height={30}
          color="white"
          additionalClassName="translate-icon"
          onClick={handleSwitchTranslation}
        />
        <Separator
          width="100%"
          height="65px"
          drawLine
          title={"navigation.menu"}
        />
        <Icon
          iconPathName={IconPathName.CLOSE}
          width={30}
          height={30}
          onClick={() => setIsOpen(false)}
          color="white"
          additionalClassName="close-icon"
        />
        <ul className="nav-menu-container">
          <li>
            <Button
              title="home"
              onClick={() => handleNavigate("/")}
              buttonStyleType={"secondary"}
              additionalClassname="button-menu"
            />
          </li>
          <li>
            <Button
              title="about_me"
              onClick={() => handleNavigate("/about")}
              buttonStyleType={"secondary"}
              additionalClassname="button-menu"
            />
          </li>
          <li>
            <Button
              title="work_experience"
              onClick={() => handleNavigate("/work-experience")}
              buttonStyleType={"secondary"}
              additionalClassname="button-menu"
            />
          </li>
          <li>
            <Button
              title="projects"
              onClick={() => handleNavigate("/projects")}
              buttonStyleType={"secondary"}
              additionalClassname="button-menu"
            />
          </li>
          <li>
            <Button
              title="contact_me"
              onClick={() => handleNavigate("/get-in-touch")}
              buttonStyleType={"secondary"}
              additionalClassname="button-menu"
            />
          </li>
          <li>
            <Button
              title="faq"
              onClick={() => handleNavigate("/faq")}
              buttonStyleType={"secondary"}
              additionalClassname="button-menu"
            />
          </li>
        </ul>
      </div>
      {/* end menu opened */}
    </nav>
  );
};
