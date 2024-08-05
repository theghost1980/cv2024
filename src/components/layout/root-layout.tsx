import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Outlet } from "react-router-dom";
import { Navbar } from "./navbar/navbar";
import "./root-layout.css";

export const RootLayout = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    initLangCheck();
  }, []);

  const initLangCheck = async () => {
    const prevLanguage = localStorage.getItem("cv_2024_lang");
    if (prevLanguage) {
      await i18n.changeLanguage(prevLanguage);
    }
  };

  const handleSwitchTranslation = async () => {
    const prevLanguage = localStorage.getItem("cv_2024_lang");
    const lang = prevLanguage ?? i18n.language;
    const toSet = lang === "en" ? "es" : "en";
    await i18n.changeLanguage(toSet);
    localStorage.setItem("cv_2024_lang", toSet);
  };

  return (
    <>
      <Navbar handleSwitchTranslation={handleSwitchTranslation} />
      <div id="detail" className="detail">
        <Outlet />
      </div>
    </>
  );
};
