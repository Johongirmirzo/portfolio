import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BsGlobe, BsCheckLg } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import { useThemeContext } from "../../context/ThemeContext";
import { England, Uzbekistan, Russian, Poland } from "../../assets";
import { ChangeLanguageBox } from "./index.styled";

const ChangeLanguage = ({ handleCloseMenuClick }) => {
  const { t, i18n } = useTranslation();
  const theme = useThemeContext();
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  useEffect(() => {
    const body = document.body;
    const toggleChangeLanguageMenu = () => {
      console.log(isLanguageDropdownOpen);
      if (isLanguageDropdownOpen) {
        setIsLanguageDropdownOpen(false);
      }
    };
    body.addEventListener("click", toggleChangeLanguageMenu);
    return () => body.removeEventListener("click", toggleChangeLanguageMenu);
  }, [isLanguageDropdownOpen]);

  const handleToggleLanguageDropdownClick = (e) => {
    e.stopPropagation();
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  const handleChangeLanguageClick = (language = "en") => {
    i18n.changeLanguage(language.toLowerCase());
    if (handleCloseMenuClick) {
      handleCloseMenuClick();
    }
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  };
  return (
    <ChangeLanguageBox
      theme={theme.isLightMode ? theme.theme.light : theme.theme.dark}
      isLanguageDropdownOpen={isLanguageDropdownOpen}
    >
      <motion.button
        animate={{ scale: [1, 2, 1] }}
        transition={{ times: [0, 0.1, 0.9, 1], delay: 1.2 }}
        onClick={handleToggleLanguageDropdownClick}
      >
        <BsGlobe /> {t("navbar.changeLanguage")}
      </motion.button>
      <ul>
        <li onClick={handleChangeLanguageClick.bind(null, "en")}>
          <div>
            <img src={England} alt="the flat of England" />
            <a href="/#">EN</a>
          </div>
          {i18n.language === "en" && <BsCheckLg />}
        </li>
        <li onClick={handleChangeLanguageClick.bind(null, "uz")}>
          <div>
            <img src={Uzbekistan} alt="the flat of Uzbekistan" />
            <a href="/#">UZ</a>
          </div>
          {i18n.language === "uz" && <BsCheckLg />}
        </li>
        <li onClick={handleChangeLanguageClick.bind(null, "ru")}>
          <div>
            <img src={Russian} alt="the flat of Russia" />
            <a href="/#">RU</a>
          </div>
          {i18n.language === "ru" && <BsCheckLg />}
        </li>
        <li onClick={handleChangeLanguageClick.bind(null, "pl")}>
          <div>
            <img src={Poland} alt="the flat of Poland" />
            <a href="/#">PL</a>
          </div>
          {i18n.language === "pl" && <BsCheckLg />}
        </li>
      </ul>
    </ChangeLanguageBox>
  );
};

export default ChangeLanguage;
