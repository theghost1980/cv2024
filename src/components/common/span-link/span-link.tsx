import React from "react";
import { useTranslation } from "react-i18next";
import "./span-link.css";

interface Props {
  titleLink: string;
  link: string;
}

const SpanLink = ({ titleLink, link }: Props) => {
  const { t } = useTranslation();
  return (
    <span
      title={`visit ${link}`}
      className="text-link"
      onClick={() => window.open(link)}
    >
      {t(titleLink)}
    </span>
  );
};

export default SpanLink;
