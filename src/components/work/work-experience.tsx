import React from "react";
import {
  BackgroundImage,
  BgImageFileName,
} from "../common/background-image/background-image";
import { IconPathName, LogoPathName } from "../common/icon/icon";
import ResponsiveGrid from "../common/responsive-grid/responsive-grid";
import "./work-experience.css";

const items = [
  {
    id: "01",
    title: "Frontend Engineer",
    bgCard: BgImageFileName.KEYCHAIN_CARD,
    extraCss: "tall",
    logoPath: LogoPathName.KEYCHAIN,
    flagIcon: IconPathName.FLAG_TAIWAN,
    companyName: "Keychain L.T.D",
    companyLinkURL: "https://hive-keychain.com/",
    position: "Fully Remote",
    time: "2 years 7 months",
  },
  {
    id: "02",
    title: "Frontend Developer & Project Leader",
    bgCard: BgImageFileName.HIVE_KEYCHAIN_CARD,
    extraCss: "big",
    logoPNG: <img src="./assets/images/svg/logo/hive-engine-logo.png" />,
    flagIcon: IconPathName.FLAG_UNITED_STATES,
    companyName: "Hive Engine",
    companyLinkURL: "https://hive-engine.com/",
    position: "Fully Remote",
    time: "5 months",
  },
  {
    id: "03",
    title: "Frontend Specialist",
    bgCard: BgImageFileName.FREELANCE_CARD,
    extraCss: "big",
    logoPath: LogoPathName.FREELANCE_WORK,
    flagIcon: IconPathName.FLAG_VENEZUELA,
    companyName: "Autonomous Freelancer",
    position: "Hybrid",
    time: "2 years",
  },
  {
    id: "04",
    title: "Caregiver",
    bgCard: BgImageFileName.ENA_CARD,
    extraCss: "wide",
    logoPNG: <img src="./assets/images/svg/logo/ena-logo.png" />,
    flagIcon: IconPathName.FLAG_UK,
    include_flag_in_title: true,
    companyName: "ENA L.T.D",
    companyLinkURL: "https://www.ena.co.uk/",
    position: "Fully In-place",
    time: "1 year 5 months",
  },
  {
    id: "05",
    title: "Electronic Engineer",
    bgCard: BgImageFileName.ECCEL_CARD,
    logoPNG: <img src="./assets/images/svg/logo/eccel-logo.png" />,
    flagIcon: IconPathName.FLAG_COLOMBIA,
    include_flag_in_title: true,
    companyName: "Eccel Corporation",
    companyLinkURL: "http://eccel.co/",
    position: "Fully Office",
    time: "1 year",
  },
  {
    id: "06",
    title: "Frontend Engineer & Software Specialist",
    bgCard: BgImageFileName.BLOCKVEN_CARD,
    extraCss: "wide",
    logoPNG: (
      <img
        src="./assets/images/svg/logo/blockven-logo.png"
        width={"200px"}
        style={{
          background: "linear-gradient(var(--lighter-tone), #fffefe49)",
          borderRadius: "8px",
          padding: "4px",
        }}
      />
    ),
    flagIcon: IconPathName.FLAG_VENEZUELA,
    include_flag_in_title: true,
    companyName: "Blockven C.A",
    position: "Hybrid",
    time: "2 years",
  },
];

export const WorkExperience = () => {
  return (
    <main className="work-page">
      <BackgroundImage
        bgImageFileName={BgImageFileName.WORK}
        overlayColor={{
          red: 235,
          blue: 237,
          green: 235,
          alpha: 0.9,
        }}
      />
      <section className="work-section">
        <ResponsiveGrid items={items} />
      </section>
    </main>
  );
};
