import styled, { css } from "styled-components";
import { motion } from "framer-motion";

const HeroBox = styled.section`
  max-width: 960px;
  width: 90%;
  margin: 0 auto;
  min-height: 100vh;
  padding-top: 200px;
  padding-left: 10px;
  @media (min-width: 768px) {
    padding-left: 0;
    & div {
      display: flex;
      gap: 50px;
    }
  }
  & div {
    & h1 {
      font-size: clamp(2rem, calc(3.5vw + 1rem), 4rem);
      & span {
        display: block;
        margin-bottom: 10px;
        font-size: 16px;
      }
    }
  }
  & img {
    max-width: 100%;
    width: 300px;
    border-radius: 5px;
    transition: all 0.3s ease-out;
    opacity 0.8;
    &:hover {
        opacity: 1;
    }
  }
  & p {
    max-width: 700px;
    width: 90%;
    margin-top: 25px;
    font-size: 20px;
  }
  & a {
    margin-top: 20px;
    padding: 15px 25px;
    border-radius: 5px;
    font-size: 17px;
    font-weight: 600;
    background: #111;
    cursor: pointer;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  }
  ${(props) =>
    props.theme &&
    css`
      & span {
        color: ${props.theme.introTopTitleTextColor};
      }
      & a {
        background: ${props.theme.ctaBtnColor};
        color: #fff;
      }
    `};
`;
const HeroResumeBtn = styled(motion.a)`
  margin-left: 25px;
`;

export { HeroBox, HeroResumeBtn };
