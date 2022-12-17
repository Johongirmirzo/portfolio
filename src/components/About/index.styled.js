import styled, { css } from "styled-components";
import { motion } from "framer-motion";

const AboutBox = styled(motion.section)`
  padding: 150px 0;
  min-height: 100vh;
  & header {
    margin-bottom: 40px;
    & h2 {
      font-size: clamp(1.5rem, calc(3.5vw + 1rem), 3rem);
    }
  }
  & img {
    align-self: flex-start;

    max-width: 100%;
    transition: all 0.3s ease-out;
    opacity: 0.8;
    border-radius: 5px;
    &:hover {
      opacity: 1;
      transform: scale(1.1);
    }
  }
  & ul {
    display: flex;
    align-items: center;
    gap: 25px;
    margin-top: 25px;
    list-style: none;
    & li {
      font-size: 25px;
    }
    & img {
      width: 25px;
      height: 25px;
      opacity: 1;
    }
    & a {
      color: #000;
      transition: all 0.3s ease-out;
      &:hover {
        transform: scale(1.1);
      }
      &.linkedin {
        color: #1358a9;
      }

      &.twitter {
        color: #00acee;
      }
    }
  }
  ${(props) =>
    props.theme &&
    css`
      .github {
        color: ${props.theme.textColor};
      }
    `}
`;
const AboutContainer = styled(motion.div)`
  @media (min-width: 768px) {
    display: flex;
    gap: 50px;
    overflow: hidden;
    & > * {
      flex: 1;
    }
  }
`;
const AboutTextBox = styled(motion.div)`
  & p {
    margin-bottom: 20px;
    font-size: 16px;
    font-family: Lora;
  }
`;
const AboutImgContainer = styled.div`
  align-self: flex-start;
  overflow: hidden;
`;

export { AboutBox, AboutContainer, AboutTextBox, AboutImgContainer };
