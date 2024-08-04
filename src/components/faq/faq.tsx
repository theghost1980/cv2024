import { t } from "i18next";
import React, { useState } from "react";
import { FAQ_DATA_CARD_LIST } from "../../reference-data/faq-data";
import {
  BackgroundImage,
  BgImageFileName,
} from "../common/background-image/background-image";
import FaqItem from "./faq-item";
import "./faq.css";

const Faq = () => {
  const [allCollapsed, setAllCollapsed] = useState(true);

  const handleExpandCollapseAll = () => {
    setAllCollapsed(!allCollapsed);
  };

  return (
    <main className="faq-page">
      <BackgroundImage
        bgImageFileName={BgImageFileName.HOME_OFFICE}
        overlayColor={{
          red: 235,
          blue: 237,
          green: 235,
          alpha: 0.8,
        }}
      />
      <BackgroundImage
        bgImageFileName={BgImageFileName.TECH_SUPPORT}
        additionalClassname="support-bg"
      />
      <section className="faq-section">
        <div className="faq-top-section">
          <div className="faq-title-container">
            <p className="faq-title-part-one">
              {t("data.faq.top.title.part_1")}
            </p>
            <p className="faq-title-part-two">
              {t("data.faq.top.title.part_2")}
            </p>
          </div>
        </div>
        <ul className="ul-default-list question-list">
          {FAQ_DATA_CARD_LIST.map((f) => {
            return <FaqItem key={`${f.id}-frecuent-card`} item={f} />;
          })}
        </ul>
      </section>
    </main>
  );
};

export default Faq;
