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
    description:
      "Plan, design and deliver full websites and software applications. Using web development, specifically react I was able to integrate modern frameworks and IT infrastructures to develop and deliver MVPs. Also using software development as Visual basic I was able to create software per client's request.",
    acomplishments: [
      "Deal with many clients to deliver websites & software",
      "Develop modern software systems using Visual Basic",
      "Implement, lead and follow client's needs",
    ],
    images: [
      "./assets/images/work/freelance/freelance-work-1.jpg",
      "./assets/images/work/freelance/freelance-work-2.jpg",
    ],
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
    description:
      "Provide assistance, nursery and professional home care to many clients all across United Kingdom. My main challenge was adapting myself to client's needs and care. It was an amazing opportunity to take care of people in need, learn about British Culture and language.",
    acomplishments: [
      "Deliver human care and successfully fulfill client's necesities",
      "Provide professional assistance to at least 5 clients, making their live easier and happier",
      "Develop close relationships with people with dissabilities while living with them in 3 month periods of time",
    ],
    images: [
      "./assets/images/work/ena/ena-work-1.jpg",
      "./assets/images/work/ena/ena-work-2.jpg",
    ],
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
    position: "Fully In-Office",
    time: "1 year",
    description:
      "Maintain, develop and improve a design system of GPRS devices. In this job I had to implement both parts: hardware and software. The interesting aspect fo this job was being able to work among other great Engineers and help to improve the production line in place.",
    acomplishments: [
      "Improve procedures to build the equipments/devices",
      "Successfully design a better way to track equipment and improve billing rates",
      "Improve the tracking/support tickets systems for their biggest client: CODENSA",
    ],
    images: [
      "./assets/images/work/eccel/eccel-work-1.jpg",
      "./assets/images/work/eccel/eccel-work-2.jpg",
      "./assets/images/work/eccel/eccel-work-3.jpg",
    ],
  },
  {
    id: "06",
    title: "IT advisor & Software development",
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
    description:
      "Provide IT/PC repairments, professional advice and electronics repair to more than 100 clients in a yearly basis. Here I was able to execute, learn and deepen into my Engineering Degree. It was a great opportunity to work with different clients, provide networking support and improvemnts, among any IT related, including software development.",
    acomplishments: [
      "Improve computers networks for over 100 clients",
      "Provide professional support in IT, networking and electronics",
      "Develop close relationships and engaing with clients of different niches",
    ],
    images: [
      "./assets/images/work/blockven/blockven-work-1.jpg",
      "./assets/images/work/blockven/blockven-work-2.webp",
      "./assets/images/work/blockven/blockven-work-3.jpg",
      "./assets/images/work/blockven/blockven-work-4.jpg",
    ],
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
