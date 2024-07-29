import React from "react";
import ResponsiveGridItem from "./responsive-grid-item/responsive-grid-item";
import "./responsive-grid.css";

interface Props {
  items: any[];
}

const ResponsiveGrid = ({ items }: Props) => {
  return (
    <div className="responsive-grid">
      <div className="grid-wrapper">
        {items.map((i, index) => (
          <ResponsiveGridItem
            item={i}
            key={`${i.id}-${index}-grid-card-item`}
          />
        ))}
      </div>
    </div>
  );
};

export default ResponsiveGrid;