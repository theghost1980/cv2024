import React from "react";
import { BgImageFileName } from "../components/common/background-image/background-image";
import { IconPathName, LogoPathName } from "../components/common/icon/icon";

/**
 * Note: fields: title, companyName, position, time, description, acomplishments now used as i18n keys.
 */
export const WORK_DATA_CARD_LIST = [
  {
    id: "01",
    title: "data.work_experience.keychain.title",
    bgCard: BgImageFileName.KEYCHAIN_CARD,
    extraCss: "tall",
    logoPath: LogoPathName.KEYCHAIN,
    flagIcon: IconPathName.FLAG_TAIWAN,
    companyName: "data.work_experience.keychain.company_name",
    companyLinkURL: "https://hive-keychain.com/",
    position: "data.work_experience.keychain.position",
    time: "data.work_experience.keychain.time",
    description: "data.work_experience.keychain.description",
    acomplishments: [
      "data.work_experience.keychain.acomplishment_1",
      "data.work_experience.keychain.acomplishment_2",
      "data.work_experience.keychain.acomplishment_3",
    ],
    images: [
      "./assets/images/work/keychain/keychain-work-1.png",
      "./assets/images/work/keychain/keychain-work-2.png",
    ],
  },
  {
    id: "02",
    title: "data.work_experience.hive_engine.title",
    bgCard: BgImageFileName.HIVE_KEYCHAIN_CARD,
    extraCss: "big",
    logoPNG: <img src="./assets/images/svg/logo/hive-engine-logo.png" />,
    flagIcon: IconPathName.FLAG_UNITED_STATES,
    companyName: "data.work_experience.hive_engine.company_name",
    companyLinkURL: "https://hive-engine.com/",
    position: "data.work_experience.hive_engine.position",
    time: "data.work_experience.hive_engine.time",
    description: "data.work_experience.hive_engine.description",
    acomplishments: [
      "data.work_experience.hive_engine.acomplishment_1",
      "data.work_experience.hive_engine.acomplishment_2",
      "data.work_experience.hive_engine.acomplishment_3",
    ],
    images: [
      "./assets/images/work/jobaboard/jobaboard-work-1.png",
      "./assets/images/work/jobaboard/jobaboard-work-2.png",
      "./assets/images/work/jobaboard/jobaboard-work-3.png",
    ],
  },
  {
    id: "03",
    title: "data.work_experience.freelance.title",
    bgCard: BgImageFileName.FREELANCE_CARD,
    extraCss: "big",
    logoPath: LogoPathName.FREELANCE_WORK,
    flagIcon: IconPathName.FLAG_VENEZUELA,
    companyName: "data.work_experience.freelance.company_name",
    position: "data.work_experience.freelance.position",
    time: "data.work_experience.freelance.time",
    description: "data.work_experience.freelance.description",
    acomplishments: [
      "data.work_experience.freelance.acomplishment_1",
      "data.work_experience.freelance.acomplishment_2",
      "data.work_experience.freelance.acomplishment_3",
    ],
    images: [
      "./assets/images/work/freelance/freelance-work-1.jpg",
      "./assets/images/work/freelance/freelance-work-2.jpg",
    ],
  },
  {
    id: "04",
    title: "data.work_experience.ena.title",
    bgCard: BgImageFileName.ENA_CARD,
    extraCss: "wide",
    logoPNG: <img src="./assets/images/svg/logo/ena-logo.png" />,
    flagIcon: IconPathName.FLAG_UK,
    include_flag_in_title: true,
    companyName: "data.work_experience.ena.company_name",
    companyLinkURL: "https://www.ena.co.uk/",
    position: "data.work_experience.ena.position",
    time: "data.work_experience.ena.time",
    description: "data.work_experience.ena.description",
    acomplishments: [
      "data.work_experience.ena.acomplishment_1",
      "data.work_experience.ena.acomplishment_2",
      "data.work_experience.ena.acomplishment_3",
    ],
    images: [
      "./assets/images/work/ena/ena-work-1.jpg",
      "./assets/images/work/ena/ena-work-2.jpg",
    ],
  },
  {
    id: "05",
    title: "data.work_experience.eccel.title",
    bgCard: BgImageFileName.ECCEL_CARD,
    logoPNG: <img src="./assets/images/svg/logo/eccel-logo.png" />,
    flagIcon: IconPathName.FLAG_COLOMBIA,
    include_flag_in_title: true,
    companyName: "data.work_experience.eccel.company_name",
    companyLinkURL: "http://eccel.co/",
    position: "data.work_experience.eccel.position",
    time: "data.work_experience.eccel.time",
    description: "data.work_experience.eccel.description",
    acomplishments: [
      "data.work_experience.eccel.acomplishment_1",
      "data.work_experience.eccel.acomplishment_2",
      "data.work_experience.eccel.acomplishment_3",
    ],
    images: [
      "./assets/images/work/eccel/eccel-work-1.jpg",
      "./assets/images/work/eccel/eccel-work-2.jpg",
      "./assets/images/work/eccel/eccel-work-3.jpg",
    ],
  },
  {
    id: "06",
    title: "data.work_experience.blockven.title",
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
    companyName: "data.work_experience.blockven.company_name",
    position: "data.work_experience.blockven.position",
    time: "data.work_experience.blockven.time",
    description: "data.work_experience.blockven.description",
    acomplishments: [
      "data.work_experience.blockven.acomplishment_1",
      "data.work_experience.blockven.acomplishment_2",
      "data.work_experience.blockven.acomplishment_3",
    ],
    images: [
      "./assets/images/work/blockven/blockven-work-1.jpg",
      "./assets/images/work/blockven/blockven-work-2.webp",
      "./assets/images/work/blockven/blockven-work-3.jpg",
      "./assets/images/work/blockven/blockven-work-4.jpg",
    ],
  },
];
