import React from "react";
import { useTranslation } from "react-i18next";
import "./separator.css";

interface Props {
  height: string;
  width: string;
  title?: string;
  drawLine?: boolean;
  marginBottom?: number;
}

export const Separator = ({
  height,
  drawLine,
  width,
  title,
  marginBottom = 0,
}: Props) => {
  let separatorStyle = {
    height,
    width,
    marginBottom: `${marginBottom}px`,
    position: "relative",
  } as React.CSSProperties;
  const { t } = useTranslation();
  if (drawLine) {
    separatorStyle["borderBottom"] = "1px";
    separatorStyle["borderBottomStyle"] = "solid";
    separatorStyle["borderBottomColor"] = "white";
  }

  return (
    <div className={`${title ? "title" : ""}`} style={separatorStyle}>
      {t(title)}
    </div>
  );
};
