import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Hero from "./Hero";
import ChangeLanguage from "../ChangeLanguage";
import ChangeTheme from "../ChangeTheme";
import MobileMenu from "./MobileMenu";
import { useThemeContext } from "../../context/ThemeContext";
import { useMobile } from "../../hooks/useMobile";
import {
  Header,
  HeaderNavbarBox,
  Nav,
  HeaderBtnsBox,
  Hamburger,
} from "./index.styled";

const Navbar = () => {
  const appTheme = useThemeContext();
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobileMenu = useMobile();

  const handleOpenMenuClick = () => setIsMenuOpen(true);
  const handleCloseMenuClick = () => setIsMenuOpen(false);

  return (
    <Header>
      <HeaderNavbarBox
        theme={
          appTheme.isLightMode ? appTheme.theme.light : appTheme.theme.dark
        }
      >
        <Nav
          theme={
            appTheme.isLightMode ? appTheme.theme.light : appTheme.theme.dark
          }
        >
          <motion.a
            href="#home"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25 }}
          >
            J/R
          </motion.a>
          {!isMobileMenu && (
            <ul>
              <li>
                <motion.a
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.25, delay: 0.2 }}
                  href="#home"
                >
                  {t("navbar.home")}
                </motion.a>
              </li>
              <li>
                <motion.a
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.25, delay: 0.4 }}
                  href="#about"
                >
                  {t("navbar.about")}
                </motion.a>
              </li>
              <li>
                <motion.a
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.25, delay: 0.6 }}
                  href="#projects"
                >
                  {t("navbar.projects")}
                </motion.a>
              </li>
              <li>
                <motion.a
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.25, delay: 0.8 }}
                  href="https://dev.to/johongirr"
                  target="_blank"
                  rel="noreferrer"
                >
                  {t("navbar.blog")}
                </motion.a>
              </li>
              <li>
                <motion.a
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.25, delay: 1 }}
                  href="mailto:rjohongirmirzohon@gmail.com"
                >
                  {t("navbar.contact")}
                </motion.a>
              </li>
            </ul>
          )}
        </Nav>
        {!isMobileMenu ? (
          <HeaderBtnsBox>
            <ChangeLanguage />
            <ChangeTheme />
          </HeaderBtnsBox>
        ) : (
          <Hamburger
            theme={
              appTheme.isLightMode ? appTheme.theme.light : appTheme.theme.dark
            }
            onClick={handleOpenMenuClick}
          >
            <div></div>
            <div></div>
            <div></div>
          </Hamburger>
        )}
      </HeaderNavbarBox>
      <Hero />
      {isMenuOpen && isMobileMenu && (
        <MobileMenu
          isMenuOpen={isMenuOpen}
          handleCloseMenuClick={handleCloseMenuClick}
        />
      )}
    </Header>
  );
};

export default Navbar;
