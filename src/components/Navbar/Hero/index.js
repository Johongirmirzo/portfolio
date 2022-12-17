import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import MyPicture from "../../../assets/me.jpg";
import { useThemeContext } from "../../../context/ThemeContext";
import { HeroBox, HeroResumeBtn } from "./index.styled";
import MyResume from "../../../assets/my-resume.pdf";

const Hero = () => {
  const theme = useThemeContext();
  const { t } = useTranslation();
  return (
    <HeroBox
      id="home"
      theme={theme.isLightMode ? theme.theme.light : theme.theme.dark}
    >
      <div>
        <motion.img
          animate={{ translateX: [-100, 0, 0] }}
          transition={{ type: "spring", times: [0, 0.1, 0.9] }}
          src={MyPicture}
          alt="me looking at the camera"
        />
        <motion.h1
          animate={{ translateX: [100, 0, 0] }}
          transition={{ type: "spring", times: [0, 0.1, 0.9] }}
        >
          <span>{t("hero.topTitle")}</span>
          Jaxongir
          <br />
          Rahimov
        </motion.h1>
      </div>
      <motion.p
        animate={{ opacity: [0, 0.5, 1] }}
        transition={{ type: "spring", times: [0, 0.1, 0.9] }}
      >
        {t("hero.description")}
      </motion.p>
      <motion.a
        animate={{ translateY: [100, 0, 0] }}
        transition={{ type: "spring", times: [0, 0.1, 0.9] }}
        href="#projects"
      >
        {t("hero.heroCtaBtn")}
      </motion.a>
      <HeroResumeBtn
        animate={{ translateY: [100, 0, 0] }}
        transition={{ type: "spring", times: [0, 0.1, 0.9] }}
        href={MyResume}
        target="_blank"
        rel="noreferrer"
      >
        Resume
      </HeroResumeBtn>
    </HeroBox>
  );
};

export default Hero;
