import styled, { css } from "styled-components";
import { motion } from "framer-motion";

const ContactBox = styled(motion.section)`
  padding: 150px 0;
  min-height: 100vh;
  & header {
    & h2 {
      margin-bottom: 10px;
      font-size: clamp(1.5rem, calc(3.5vw + 1rem), 3rem);
    }
    & p {
      max-width: 550px;
      width: 90%;
      margin-bottom: 20px;
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
      &.github {
        color: #000;
      }
      &.twitter {
        color: #00acee;
      }
    }
  }
`;
const ContactMailBtn = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
  padding: 15px 25px;
  border-radius: 5px;
  font-size: 17px;
  font-weight: 600;
  background: #111;
  cursor: pointer;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  ${(props) =>
    props.theme &&
    css`
      background: ${props.theme.ctaBtnColor};
      color: #fff;
    `};
`;

export { ContactBox, ContactMailBtn };
