import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FAQItem } from "../../reference-data/faq-data";
import { Icon, IconPathName } from "../common/icon/icon";

interface Props {
  item: FAQItem;
}

const FaqItem = ({ item }: Props) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li
      key={`${item.id}-frecuent-asked-question-card`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="question-card">
        <div className="div-row-spaced">
          <h3 className="header-title-small question-title">
            {t(item.question)}
          </h3>
          <Icon
            iconPathName={IconPathName.EXPAND}
            width={30}
            height={30}
            color="var(--vibrant-orange-lighter)"
            additionalClassName={`expand-icon ${isOpen ? "expanded" : ""}`}
          />
        </div>
        {isOpen && (
          <div className="answer-container">
            <h3 className="sub-header-title-italic answer-text">
              {t(item.answer)}
            </h3>
          </div>
        )}
      </div>
    </li>
  );
};

export default FaqItem;
