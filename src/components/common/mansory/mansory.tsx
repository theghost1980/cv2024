import React from "react";
import "./mansory.css";
//TODO remove component & css

interface Props {
  children: JSX.Element[];
}

const MasonryLayout = ({ children }: Props) => {
  return <div className="grid-wrapper">{children}</div>;
};

export default MasonryLayout;
