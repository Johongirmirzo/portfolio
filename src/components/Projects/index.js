import React from "react";
import { motion } from "framer-motion";
import { BsGithub } from "react-icons/bs";
import { HiOutlineExternalLink } from "react-icons/hi";
import { useTranslation } from "react-i18next";
import {
  BloodDonorImg,
  ProductFeedbackImg,
  PharmacyAppImg,
} from "../../assets";
import { useThemeContext } from "../../context/ThemeContext";
import { scrollConfigs } from "../../config/scrollAnimationConfig";
import { ProjectsBox, ProjectCard, ProjectCardLinkBox } from "./index.styled";

const Projects = () => {
  const appTheme = useThemeContext();
  const { t } = useTranslation();

  return (
    <ProjectsBox
      id="projects"
      theme={appTheme.isLightMode ? appTheme.theme.light : appTheme.theme.dark}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.header variants={scrollConfigs}>
        <h2>{t("myProjects.title")}</h2>
      </motion.header>
      <ProjectCard
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <motion.div variants={scrollConfigs}>
          <header>
            <h3>{t("myProjects.bloodDonationApp.project1Title")}</h3>
            <p>{t("myProjects.bloodDonationApp.project1Text1")}</p>
            <p>{t("myProjects.bloodDonationApp.project1Text2")}</p>
          </header>
          <div>
            <h4>{t("myProjects.bloodDonationApp.project1TechStack")}</h4>
            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>Typescript</li>
              <li>Mongoose</li>
              <li>Jsonwebtoken</li>
              <li>React</li>
              <li>Redux</li>
              <li>Formik</li>
              <li>Yup</li>
            </ul>
          </div>
          <ProjectCardLinkBox>
            <a
              href="https://github.com/Johongirmirzo/blood-donor"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              <BsGithub />
            </a>
            <a
              href="https://blood-donorr.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              <HiOutlineExternalLink />
            </a>
          </ProjectCardLinkBox>
        </motion.div>
        <motion.a
          href="https://blood-donorr.netlify.app/"
          target="_blank"
          rel="noreferrer"
          variants={scrollConfigs}
        >
          <img
            src={BloodDonorImg}
            alt="pic of the client side of the blood donation app"
          />
        </motion.a>
      </ProjectCard>
      <ProjectCard
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <motion.a
          href="https://pharmacy-management-app-admin.netlify.app/login"
          target="_blank"
          rel="noreferrer"
          variants={scrollConfigs}
        >
          <img
            src={PharmacyAppImg}
            alt="pic of the client side of the blood donation app"
          />
        </motion.a>
        <motion.div variants={scrollConfigs}>
          <header>
            <h3>{t("myProjects.pharmacyManagementApp.projectTitle")}</h3>
            <p>{t("myProjects.pharmacyManagementApp.projectText1")}</p>
          </header>
          <div>
            <h4>{t("myProjects.pharmacyManagementApp.projectTechStack")}</h4>
            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>Typescript</li>
              <li>Mongoose</li>
              <li>Jsonwebtoken</li>
              <li>React</li>
              <li>Redux</li>
              <li>Formik</li>
              <li>Yup</li>
            </ul>
          </div>
          <ProjectCardLinkBox>
            <a
              href="https://github.com/Johongirmirzo/pharmacy-management"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              <BsGithub />
            </a>
            <a
              href="https://pharmacy-management-app-admin.netlify.app/login"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              <HiOutlineExternalLink />
            </a>
          </ProjectCardLinkBox>
        </motion.div>
      </ProjectCard>
      <ProjectCard
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <motion.div variants={scrollConfigs}>
          <header>
            <h3>{t("myProjects.productFeedbackApp.projectTitle")}</h3>
            <p>{t("myProjects.productFeedbackApp.projectText1")}</p>
            <p>{t("myProjects.productFeedbackApp.projectText2")}</p>
          </header>
          <div>
            <h4>{t("myProjects.productFeedbackApp.projectTechStack")}</h4>
            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>Typescript</li>
              <li>Mongoose</li>
              <li>Jsonwebtoken</li>
              <li>React</li>
              <li>Redux</li>
              <li>Formik</li>
              <li>Yup</li>
            </ul>
          </div>
          <ProjectCardLinkBox>
            <a
              href="https://github.com/Johongirmirzo/product-feedback"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              <BsGithub />
            </a>
            <a
              href="https://product-feedbacck.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              <HiOutlineExternalLink />
            </a>
          </ProjectCardLinkBox>
        </motion.div>
        <motion.a
          href="https://product-feedbacck.netlify.app/"
          target="_blank"
          rel="noreferrer"
          variants={scrollConfigs}
        >
          <img
            src={ProductFeedbackImg}
            alt="pic of the client side of the blood donation app"
          />
        </motion.a>
      </ProjectCard>
    </ProjectsBox>
  );
};

export default Projects;
