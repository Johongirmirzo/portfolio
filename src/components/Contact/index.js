import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { BsGithub, BsTwitter } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import { useThemeContext } from "../../context/ThemeContext";
import { scrollConfigs } from "../../config/scrollAnimationConfig";
import { ContactBox, ContactMailBtn } from "./index.styled";

const Contact = () => {
  const theme = useThemeContext();
  const { t } = useTranslation();
  return (
    <ContactBox
      theme={theme.isLightMode ? theme.theme.light : theme.theme.dark}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.header variants={scrollConfigs}>
        <h2>{t("contact.title")}</h2>
        <p>{t("contact.description")}</p>
      </motion.header>
      <motion.ul variants={scrollConfigs}>
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
      </motion.ul>
      <ContactMailBtn
        href="mailto:rjohongirmirzohon@gmail.com"
        theme={theme.isLightMode ? theme.theme.light : theme.theme.dark}
        variants={scrollConfigs}
      >
        <FiMail />
        {t("contact.contactCtaBtn")}
      </ContactMailBtn>
    </ContactBox>
  );
};

export default Contact;
