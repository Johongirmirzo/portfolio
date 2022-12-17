import styled, { css } from "styled-components";

const LoaderBox = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;
  background: #1a202e;
  color: #fff;
  font-size: 30px;
  z-index: 9999;
  ${(props) =>
    props.theme &&
    css`
      background: ${props.theme.background};
      color: ${props.theme.primaryTextColor};
    `};
`;

export { LoaderBox };
