import React, { useState } from "react";
import "./carousel.css";
//TODO remove component & css

type CarouselItem = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const dummyData: CarouselItem[] = [
  {
    id: 1,
    title: "First Item",
    description: "Description for first item",
    image: "./assets/images/carousel/about/image1.jpg",
  },
  {
    id: 2,
    title: "Second Item",
    description: "Description for second item",
    image: "./assets/images/carousel/about/image2.jpg",
  },
  {
    id: 3,
    title: "Third Item",
    description: "Description for third item",
    image: "./assets/images/carousel/about/image3.jpg",
  },
];

interface Props {}

const Carousel = ({}: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === dummyData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? dummyData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      {dummyData.map((item, index) => (
        <div
          key={item.id}
          className={`slide ${index === activeIndex ? "active" : ""}`}
        >
          {/* <h2>{item.title}</h2>
          <p>{item.description}</p> */}
          <img src={item.image} alt={item.title} className="slide-image" />
          <div className="buttons-container">
            <button onClick={handlePrev}>Previous</button>
            <button onClick={handleNext}>Next</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
