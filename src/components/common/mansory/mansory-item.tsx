import React from "react";
//TODO remove component & css

interface Props {
  children: JSX.Element;
  imgPath: string;
}

const MasonryItem = ({ children, imgPath }: Props) => {
  //   return <div className="masonry-item">{children}</div>;
  return (
    <div>
      <img src={`./assets/images/bg/${imgPath}`} />
    </div>
  );
};

export default MasonryItem;
