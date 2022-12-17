import styled, { css } from "styled-components";
import { motion } from "framer-motion";

const ProjectsBox = styled.section`
  padding: 150px 0;
  min-height: 100vh;
  & header {
    margin-bottom: 70px;
    & h2 {
      font-size: clamp(1.5rem, calc(3.5vw + 1rem), 3rem);
    }
  }
  & h3 {
    font-size: clamp(1.2rem, calc(3.5vw + 1rem), 2rem);
    margin-bottom: 20px;
  }
  & h4 {
    margin-bottom: 15px;
  }
  & p {
    font-family: Lora;
    margin-bottom: 15px;
  }
  ${(props) =>
    props.theme &&
    css`
      .project-link {
        color: ${props.theme.textColor};
      }
    `}
`;
const ProjectCard = styled(motion.article)`
  margin-bottom: 50px;
  & header {
    margin-bottom: 25px;
  }
  & img {
    margin-top: 50px;
    width: 100%;
    height: 80%;
  }
  & ul {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;

    & li {
      font-size: 15px;
      margin-left: 15px;
    }
  }
  @media (min-width: 768px) {
    display: flex;
    gap: 50px;
    margin-bottom: 100px;
    & > * {
      flex: 1;
      width: 50%;
    }
    & img {
      margin-top: 50px;
    }
  }
`;
const ProjectCardLinkBox = styled.div`
  margin-top: 25px;
  & a {
    font-size: 25px;
    margin-right: 25px;
    transition: all 0.3s ease-out;
    &:hover {
      color: hsl(220, 94%, 56%);
    }
  }
`;

export { ProjectsBox, ProjectCard, ProjectCardLinkBox };
