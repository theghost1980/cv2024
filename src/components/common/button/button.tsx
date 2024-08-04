import React from "react";
import { useTranslation } from "react-i18next";
import "./button.css";

interface Props {
  title: string;
  onClick: () => void;
  buttonStyleType: "primary" | "secondary" | "agressive";
  additionalClassname?: string;
}

export const Button = ({
  title,
  onClick,
  additionalClassname,
  buttonStyleType,
}: Props) => {
  const { t } = useTranslation();
  return (
    <button
      title={title}
      onClick={onClick}
      className={`button ${buttonStyleType} ${additionalClassname}`}
    >
      {t(`button.${title}`)}
    </button>
  );
};
