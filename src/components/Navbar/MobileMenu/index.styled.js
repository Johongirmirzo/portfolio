import styled, { css } from "styled-components";
import { Hamburger } from "../index.styled";

const MobileMenuBox = styled.div`
  position: fixed;
  inset: 10px;
  width: 0;
  height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-out;
  background: #fff;
  z-index: 999;
  visibility: hidden;
  & ul {
    text-align: center;
    list-style: none;
    & li {
      margin-bottom: 30px;
    }
    & a {
      transition: all 0.3s ease-out;
      &:hover {
        color: rgb(23, 89, 230);
      }
    }
  }
  & > button {
    position: absolute;
    top: 50px;
    right: 50px;
    cursor: pointer;
    background: transparent;
    color: #fff;
  }

  ${(props) =>
    props.isMenuOpen &&
    css`
      inset: 0;
      transform: translate(0, 0);
      height: 100vh;
      width: 100%;
      height: 100%;
      visibility: visible;
    `}
  ${(props) =>
    props.theme &&
    css`
      & > a,
      ul a {
        color: ${props.theme.primaryTextColor};
      }
      background: ${props.theme.background};
      color: ${props.theme.primaryTextColor};
    `};
`;
const MobileMenuBtnBox = styled.div`
  display: flex;
  gap: 25px;
  & > * {
    &:not(:last-child) {
      margin-bottom: 25px;
    }
  }
`;

const MobileMenuHamburger = styled(Hamburger)`
  position: absolute;
  top: 50px;
  right: 20px;
  z-index: 9999;
  & div {
    width: 25px;
  }
  & div:nth-child(3) {
    width: 35px;
  }
  & > *:first-child {
    transform: rotate(45deg) translate(-2px, -2px);
  }
  & > *:nth-child(2) {
    opacity: 0;
  }
  & > *:last-child {
    transform: rotate(-45deg) translate(14px, -12px);
  }
  ${(props) =>
    props.theme &&
    css`
      & div {
        background: ${props.theme.introTopTitleTextColor};
      }
    `}
`;

export { MobileMenuBox, MobileMenuBtnBox, MobileMenuHamburger };
