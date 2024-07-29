import React from "react";
import "./span-link.css";

interface Props {
  titleLink: string;
  link: string;
}

const SpanLink = ({ titleLink, link }: Props) => {
  return (
    <span
      title={`visit ${link}`}
      className="text-link"
      onClick={() => window.open(link, "")}
    >
      {titleLink}
    </span>
  );
};

export default SpanLink;
