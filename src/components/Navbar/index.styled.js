import styled, { css } from "styled-components";
import { motion } from "framer-motion";

const Header = styled.header`
  min-height: auto;
`;
const HeaderNavbarBox = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items;
    padding: 25px;
    z-index:99;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
    ${(props) =>
      props.theme &&
      css`
        background: ${props.theme.navbarBgColor};
      `}
  
`;
const Nav = styled.nav`
    display: flex;
    align-items: center;
    & > a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 50px;
        border: 3px solid hsl(166, 90%, 40%);
        border-radius: 50%;
        margin-right: clamp(10rem, calc(5vw + 5rem), 15rem);
    }
    & ul {
        list-style: none;
        display: flex;
        align-items;
        & li:not(:last-child) {
            margin-right: 50px;
        }
        & a {
          transition: all 0.3s ease-out;
          &:hover {
            color: rgb(23, 89, 230);
          }
        }
    }
    ${(props) =>
      props.theme &&
      css`
        & > a,
        ul a {
          color: ${props.theme.primaryTextColor};
        }
      `}
`;
const HeaderBtnsBox = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Hamburger = styled.div`
  align-self: center;
  cursor: pointer;
  z-index: 9999;
  &:hover div:nth-child(3) {
    width: 35px;
  }
  &:hover div:nth-child(2) {
    width: 35px;
  }
  & div {
    margin-left: auto;
    height: 3px;
    width: 25px;
    transition: all 0.3s ease-out;
    &:not(:last-child) {
      margin-bottom: 5px;
    }
  }
  & div:nth-child(1) {
    width: 35px;
  }
  & div:nth-child(2) {
    width: 20px;
  }
  & div:nth-child(3) {
    width: 30px;
  }
  ${(props) =>
    props.theme &&
    css`
      & div {
        background: ${props.theme.introTopTitleTextColor};
      }
    `}
`;

export { Header, HeaderNavbarBox, Nav, HeaderBtnsBox, Hamburger };
