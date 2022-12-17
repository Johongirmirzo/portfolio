import styled, { css } from "styled-components";

const ChangeLanguageBox = styled.div`
  position: relative;
  background: transparent;
  & button {
    font-size: 1.1rem;
    cursor: pointer;
    background: transparent;
  }
  & ul {
    position: absolute;
    top: 100px;
    right: 0;
    width: 180px;
    list-style: none;
    padding: 25px 0;
    border-radius: 5px;
    transition: all 0.3s ease-out;
    visibility: hidden;
    opacity: 0;
    & li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 20px;
      cursor: pointer;
      &:not(:last-child) {
        margin-bottom: 20px;
      }
    }
    & a {
      font-size: 20px;
      margin-left: 15px;
    }
  }
  & img {
    width: 40px;
  }
  ${(props) =>
    props.isLanguageDropdownOpen &&
    css`
      & ul {
        top: 40px;
        opacity: 1;
        visibility: visible;
      }
    `}
  ${(props) =>
    props.theme &&
    css`
      & button {
        color: ${props.theme.primaryTextColor};
      }
      & ul {
        background: ${props.theme.languageSwitcherColor};
        box-shadow: 0 0 25px rgba(0, 0, 0, 0.1);
        & a {
          color: ${props.theme.primaryTextColor};
        }
      }
    `};
`;

export { ChangeLanguageBox };
