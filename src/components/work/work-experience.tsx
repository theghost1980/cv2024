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
    description:
      "Implement, develop, test and refactor features for a chrome wallet extension and mobile app, using modern tools like Reactjs, Typescript, Jest, C.I, Webpack, Bootstrap, react native, android studio, JAVA, etc. Hotfixes and code bugging was a day to day task, for both apps being used for +10,000 users.",
    acomplishments: [
      "Implement more than 12 new features in the extension and mobile app",
      "Developed the CI-testing platform from scratch for a large code base",
      "Delivered clean and reusable code under very strict control standards",
    ],
    images: [
      "./assets/images/work/keychain/keychain-work-1.png",
      "./assets/images/work/keychain/keychain-work-2.png",
    ],
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
    description:
      "Plan, design and deliver a full platform based in web3, coding the backend and frontend. The real challenge was making this project in a short timeframe, besides that, learn about this web3 network and implement the best practices to deliver a good product.",
    acomplishments: [
      "Successfully handle backend auth, content CDN & NFTs creation",
      "Develop the frontend using GatsbyJs, React and modern UI/UX structures",
      "Implement and lead this project in 5 months",
    ],
    images: [
      "./assets/images/work/jobaboard/jobaboard-work-1.png",
      "./assets/images/work/jobaboard/jobaboard-work-2.png",
      "./assets/images/work/jobaboard/jobaboard-work-3.png",
    ],
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
