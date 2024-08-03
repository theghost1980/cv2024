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
          alpha: 0.7,
        }}
      />
      <section className="faq-section">
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
