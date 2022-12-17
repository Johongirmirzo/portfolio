import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaLinkedin } from "react-icons/fa";
import { BsGithub, BsTwitter } from "react-icons/bs";
import { useThemeContext } from "../../context/ThemeContext";
import MyImage from "../../assets/me.jpg";
import { scrollConfigs } from "../../config/scrollAnimationConfig";
import {
  AboutBox,
  AboutContainer,
  AboutTextBox,
  AboutImgContainer,
} from "./index.styled";

const About = () => {
  const { t } = useTranslation();
  const appTheme = useThemeContext();
  return (
    <AboutBox
      id="about"
      theme={appTheme.isLightMode ? appTheme.theme.light : appTheme.theme.dark}
      initial={{ opacity: 0, scale: 0.1 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 1 }}
    >
      <motion.header variants={scrollConfigs}>
        <h2>{t("about.title")}</h2>
      </motion.header>
      <AboutContainer variants={scrollConfigs}>
        <AboutTextBox>
          <p>{t("about.text1")}</p>
          <p>{t("about.text2")}</p>
          <p>{t("about.text3")}</p>
          <p>{t("about.text4")}</p>
        </AboutTextBox>
        <AboutImgContainer>
          <img src={MyImage} alt="Me looking at the camera with slight smile" />
        </AboutImgContainer>
      </AboutContainer>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/johongir-rahimov-37584a1a5/"
            target="_blank"
            rel="noreferrer"
            className="linkedin"
          >
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Johongirmirzo"
            target="_blank"
            rel="noreferrer"
            className="github"
          >
            <BsGithub />
          </a>
        </li>
        <li>
          <a href="https://dev.to/johongirr" target="_blank" rel="noreferrer">
            <img
              src="https://res.cloudinary.com/practicaldev/image/fetch/s--PFPhV65b--/c_limit,f_png,fl_progressive,q_80,w_512/https://practicaldev-herokuapp-com.freetls.fastly.net/assets/devlogo-pwa-512.png"
              alt=""
            />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/Johongi78037886"
            target="_blank"
            rel="noreferrer"
            className="twitter"
          >
            <BsTwitter />
          </a>
        </li>
      </ul>
    </AboutBox>
  );
};

export default About;
