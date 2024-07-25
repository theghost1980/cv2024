import React, { useState } from "react";
import { Icon, IconPathName } from "../icon/icon";
import "./image-slider.css";

const ImageSlider = () => {
  const [active, setActive] = useState(0);

  const handleClick = (toActivate: number) => {
    if (active === toActivate) {
      setActive(0);
    } else {
      setActive(toActivate);
    }
  };

  return (
    <section className="slider-container">
      <div className="slider-images">
        <div
          className={`slider-img ${active === 1 ? "active" : ""}`}
          onClick={() => handleClick(1)}
        >
          <img src="./assets/images/carousel/about/1.jpeg" alt="1" />
          <h1>Nature</h1>
          <div className="details">
            <h2>Nature</h2>
            <p>
              I really enjoy having a nice trip into the nature, here I charge
              my batteries.
            </p>
            <p>
              I am an experienced web developer. I am 43 years old, Venezuelan
              and Italian. I consider myself a reliable, spiritual and dedicated
              person to the things I love.
            </p>
          </div>
        </div>
        <div
          className={`slider-img ${active === 2 ? "active" : ""}`}
          onClick={() => handleClick(2)}
        >
          <img src="./assets/images/carousel/about/2.jpeg" alt="1" />
          <h1>Love</h1>
          <div className="details">
            <h2>In Love</h2>
            <p>My wife is one of the most important treasures I have.</p>
            <p>
              I love to help and to serve. That's why making websites,
              correcting code, creating functions and implementing new features,
              are things that I definitely love.
            </p>
          </div>
        </div>
        <div
          className={`slider-img ${active === 3 ? "active" : ""}`}
          onClick={() => handleClick(3)}
        >
          <img src="./assets/images/carousel/about/3.jpeg" alt="1" />
          <h1>Family</h1>
          <div className="details">
            <h2>Family time</h2>
            <p>I believe family is the pilar of our lifes.</p>
            <p>
              More than just a professional Engineer I am a person who try to
              find the extraordinary in the day to day life.
            </p>
          </div>
        </div>
        <div
          className={`slider-img ${active === 4 ? "active" : ""}`}
          onClick={() => handleClick(4)}
        >
          <img src="./assets/images/carousel/about/4.jpg" alt="1" />
          <h1>Me</h1>
          <div className="details">
            <h2>Saturno</h2>
            <p>
              I have come from another galaxy, to work with you. it will be a
              real pleasure to help you make real your ideas.
            </p>
            <p>A normal guy trying to always make the difference!</p>
            <Icon
              iconPathName={IconPathName.SATURN}
              width={80}
              height={80}
              color="black"
              additionalClassName="image-slider-icon"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;

// class ImageSlider extends React.Component {
//   handleImageClick = (event: any) => {
//     const sliderImages = document.querySelectorAll(".slider-img");
//     sliderImages.forEach((img) => img.classList.remove("active"));
//     event.target.parentElement.classList.add("active");
//   };

//   render() {
//     return (
//       <section className="slider-container">
//         <div className="slider-images">
//           <div className="slider-img" onClick={this.handleImageClick}>
//             <img src="./assets/images/carousel/about/1.jpeg" alt="1" />
//             <h1>Nature</h1>
//             <div className="details">
//               <h2>Nature</h2>
//               <p>I really enjoy having a nice trip into the nature</p>
//             </div>
//           </div>
//           <div className="slider-img" onClick={this.handleImageClick}>
//             <img src="./assets/images/carousel/about/2.jpeg" alt="1" />
//             <h1>Love</h1>
//             <div className="details">
//               <h2>In Love</h2>
//               <p>My wife is one of the most important treasures I have</p>
//             </div>
//           </div>
//           <div className="slider-img" onClick={this.handleImageClick}>
//             <img src="./assets/images/carousel/about/3.jpeg" alt="1" />
//             <h1>Family</h1>
//             <div className="details">
//               <h2>Family time</h2>
//               <p>I believe family is the pilar of my life</p>
//             </div>
//           </div>
//           <div className="slider-img" onClick={this.handleImageClick}>
//             <img src="./assets/images/carousel/about/4.jpg" alt="1" />
//             <h1>Me</h1>
//             <div className="details">
//               <h2>Saturno</h2>
//               <p>A normal guy trying to always make the difference!</p>
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   }
// }

// export default ImageSlider;
