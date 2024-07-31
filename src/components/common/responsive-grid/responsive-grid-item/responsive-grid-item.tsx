import { t } from "i18next";
import React, { useState } from "react";
import ImageExpandable from "../../../image-expandable/image-expandable";
import { Icon, IconPathName } from "../../icon/icon";
import SpanLink from "../../span-link/span-link";
import "./responsive-grid-item.css";

interface Props {
  item: any;
}

const ResponsiveGridItem = ({ item: i }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const renderCompanyLink = (i: any) => {
    return i.companyLinkURL ? (
      <SpanLink titleLink={i.companyName} link={i.companyLinkURL} />
    ) : (
      t(i.companyName)
    );
  };

  return (
    <>
      <div
        className={`grid-card ${i.extraCss ? i.extraCss : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="grid-overlay">
          <div className="content-container">
            <div className="logo-title-container">
              {i.logoPath && (
                <Icon
                  iconPathName={i.logoPath}
                  width={10}
                  height={10}
                  color="white"
                />
              )}
              {i.logoPNG}
              <div
                className={`header-title-small text-centered ${
                  i.include_flag_in_title ? "div-row-centered" : ""
                }`}
              >
                {i.include_flag_in_title && (
                  <Icon
                    iconPathName={i.flagIcon}
                    width={30}
                    height={30}
                    color="white"
                    additionalClassName="margin-right-min"
                  />
                )}
                {t(i.title)}
              </div>
            </div>
            {i.flagIcon && !i.include_flag_in_title && (
              <Icon
                iconPathName={i.flagIcon}
                width={50}
                height={50}
                color="white"
              />
            )}
          </div>
        </div>
        <img src={`./assets/images/bg/${i.bgCard}`} />
      </div>
      {isOpen && (
        <div className="opened-overlay">
          <div className="card-overlay-content">
            <div className="content-details">
              <div className="content-text">
                <div className="div-row-spaced">
                  <h2 className="header-title-small bold-text text-shadow-light">
                    {t(i.title)}
                  </h2>
                  <div className="close-icon">
                    <Icon
                      iconPathName={IconPathName.CLOSE}
                      width={30}
                      height={30}
                      color="black"
                      onClick={() => setIsOpen(false)}
                    />
                  </div>
                </div>
                <h3 className="sub-header-title-italic content-subheader">
                  {t("common.at")} {renderCompanyLink(i)}
                </h3>
                <div className="position-duration-container">
                  <div className="icon-text">
                    <Icon
                      iconPathName={IconPathName.POSITION_INDICATOR}
                      width={35}
                      height={35}
                      color="black"
                    />
                    <p className="sub-header-title-italic label">
                      {t(i.position)}
                    </p>
                  </div>
                  <div className="icon-text">
                    <Icon
                      iconPathName={IconPathName.TIME}
                      width={35}
                      height={35}
                      color="black"
                    />
                    <p className="sub-header-title-italic label">{t(i.time)}</p>
                  </div>
                </div>
              </div>
              <div className="content-text orange">
                <p className="text-decription">{t(i.description)}</p>
              </div>
              <div className="content-text last ceruleo-medium">
                {i.acomplishments && (
                  <div>
                    <p className="title-italic margin-bottom-max">
                      {t("common.what_was_acommplished")}
                    </p>
                    <ul className="ul-default-list">
                      {i.acomplishments.map((a: string, index: number) => {
                        return (
                          <li key={`card-key-point-${index}`}>
                            <div className="div-row-aligned">
                              <Icon
                                iconPathName={IconPathName.CHECK}
                                color="var(--vibrant-orange-darker)"
                                width={24}
                                height={24}
                                additionalClassName="icon-class-default"
                              />
                              <p className="content-short margin-left-max">
                                {t(a)}
                              </p>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </div>
            </div>
            {i.images && (
              <div className="content-images">
                {i.images.map((i: any) => {
                  return (
                    <ImageExpandable
                      key={i}
                      source={i}
                      className="content-image"
                    />
                  );
                })}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ResponsiveGridItem;
