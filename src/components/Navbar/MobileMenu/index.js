import React from "react";
import { motion } from "framer-motion";
import ChangeLanguage from "../../ChangeLanguage";
import ChangeTheme from "../../ChangeTheme";
import { useThemeContext } from "../../../context/ThemeContext";
import {
  MobileMenuBox,
  MobileMenuBtnBox,
  MobileMenuHamburger,
} from "./index.styled";

const MobileMenu = ({ isMenuOpen, handleCloseMenuClick }) => {
  const theme = useThemeContext();

  return (
    <MobileMenuBox
      isMenuOpen={isMenuOpen}
      theme={theme.isLightMode ? theme.theme.light : theme.theme.dark}
    >
      <MobileMenuHamburger
        onClick={handleCloseMenuClick}
        theme={theme.isLightMode ? theme.theme.light : theme.theme.dark}
      >
        <div></div>
        <div></div>
        <div></div>
      </MobileMenuHamburger>
      <nav>
        {isMenuOpen && (
          <MobileMenuBtnBox>
            <ChangeTheme />
            <ChangeLanguage handleCloseMenuClick={handleCloseMenuClick} />
          </MobileMenuBtnBox>
        )}
        <ul>
          <motion.li
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25, delay: 0.2 }}
            onClick={handleCloseMenuClick}
          >
            <a href="#home">Home</a>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25, delay: 0.5 }}
            onClick={handleCloseMenuClick}
          >
            <a href="#about">About</a>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25, delay: 0.8 }}
            onClick={handleCloseMenuClick}
          >
            <a href="#projects">Projects</a>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25, delay: 1 }}
            onClick={handleCloseMenuClick}
          >
            <a href="https://dev.to/johongirr" target="_blank" rel="noreferrer">
              Blogs
            </a>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25, delay: 1.2 }}
            onClick={handleCloseMenuClick}
          >
            <a href="mailto:rjohongirmirzohon@gmail.com">Contact</a>
          </motion.li>
        </ul>
      </nav>
    </MobileMenuBox>
  );
};

export default MobileMenu;
