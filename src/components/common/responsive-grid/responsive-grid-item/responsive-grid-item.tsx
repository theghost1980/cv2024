import React, { useState } from "react";
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
      i.companyName
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
                  i.include_flag_in_title ? "div_row" : ""
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
                {i.title}
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
          <div className="close-icon">
            <Icon
              iconPathName={IconPathName.CLOSE}
              width={30}
              height={30}
              color="white"
              onClick={() => setIsOpen(false)}
            />
          </div>
          <div className="card-overlay-content">
            <div className="content-details">
              <div className="content-text">
                <div className="header-title-small bold-text text-shadow-light">
                  {i.title}
                </div>
                <div className="sub-header-title-italic content-subheader">
                  at {renderCompanyLink(i)}
                </div>
                <div className="position-duration-container">
                  <div className="icon-text">
                    <Icon
                      iconPathName={IconPathName.POSITION_INDICATOR}
                      width={35}
                      height={35}
                      color="black"
                    />
                    <div className="sub-header-title-italic label">
                      {i.position}
                    </div>
                  </div>
                  <div className="icon-text">
                    <Icon
                      iconPathName={IconPathName.TIME}
                      width={35}
                      height={35}
                      color="black"
                    />
                    <div className="sub-header-title-italic label">
                      {i.time}
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-text orange">TODO</div>
              <div className="content-text ceruleo-medium last">TODO</div>
            </div>
            <div className="content-images"></div>
          </div>
        </div>
      )}
    </>
  );
};

export default ResponsiveGridItem;
