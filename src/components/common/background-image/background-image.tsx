import React from 'react';
import HeroJPG from '../../../assets/images/bg/hero.jpg';
import HeroSaturnoPNG from '../../../assets/images/bg/hero_saturno.png';
import './background-image.css';

type BgImageType = 'hero' | "hero_saturno";

interface Props {
    bgImage: BgImageType;
    additionalClassname?: string;
    overlayColor?: string;
};

export const BackgroundImage = ({ bgImage, additionalClassname, overlayColor} : Props) => {
  const getBgImage = (image: BgImageType) => {
    switch (image) {
      case 'hero':
        return HeroJPG;
      case 'hero_saturno':
        return HeroSaturnoPNG;
    }
  };

  return (
    <div className={`bg-image-container ${additionalClassname} ${overlayColor ? 'bg-image-color-overlay' : ''}`} style={{
        backgroundImage:   `url(${getBgImage(bgImage)})`,
    }} />
  )
}
