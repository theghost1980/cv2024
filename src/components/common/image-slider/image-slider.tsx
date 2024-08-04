import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Icon, IconPathName } from "../icon/icon";
import "./image-slider.css";

const ImageSlider = () => {
  const { t } = useTranslation();
  const [active, setActive] = useState(0);

  const handleClick = (toActivate: number) => {
    if (active === toActivate) {
      setActive(0);
    } else {
      setActive(toActivate);
    }
  };

  const getExtraClass = (n: number) => {
    return active !== n && active !== 0 ? "inactive" : "";
  };

  return (
    <section className="slider-container">
      <div className="slider-images">
        <div
          className={`slider-img ${
            active === 1 ? "active" : ""
          } ${getExtraClass(1)}`}
          onClick={() => handleClick(1)}
        >
          <img src="./assets/images/carousel/about/1.jpeg" alt="1" />
          <h1>{t("data.about.nature.title")}</h1>
          <div className="details">
            <h2>{t("data.about.nature.title")}</h2>
            <p>{t("data.about.nature.p_1")}</p>
            <p>{t("data.about.nature.p_2")}</p>
          </div>
        </div>
        <div
          className={`slider-img ${
            active === 2 ? "active" : ""
          } ${getExtraClass(2)}`}
          onClick={() => handleClick(2)}
        >
          <img src="./assets/images/carousel/about/2.jpeg" alt="1" />
          <h1>{t("data.about.love.title")}</h1>
          <div className="details">
            <h2>
              {t("common.in")} {t("data.about.love.title")}
            </h2>
            <p>{t("data.about.love.p_1")}</p>
            <p>{t("data.about.love.p_2")}</p>
          </div>
        </div>
        <div
          className={`slider-img ${
            active === 3 ? "active" : ""
          } ${getExtraClass(3)}`}
          onClick={() => handleClick(3)}
        >
          <img src="./assets/images/carousel/about/3.jpeg" alt="1" />
          <h1>{t("data.about.family.title")}</h1>
          <div className="details">
            <h2>
              {t("data.about.family.title")} {t("common.time")}
            </h2>
            <p>{t("data.about.family.p_1")}</p>
            <p>{t("data.about.family.p_2")}</p>
          </div>
        </div>
        <div
          className={`slider-img ${
            active === 4 ? "active" : ""
          } ${getExtraClass(4)}`}
          onClick={() => handleClick(4)}
        >
          <img src="./assets/images/carousel/about/4.jpg" alt="1" />
          <h1>{t("data.about.me.title")}</h1>
          <div className="details">
            <h2>{t("common.my_name")}</h2>
            <p>{t("data.about.me.p_1")}</p>
            <p>{t("data.about.me.p_2")}</p>
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
