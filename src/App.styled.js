import styled, { css } from "styled-components";

const AppMain = styled.main`
  min-height: 100vh;
  ${(props) =>
    props.theme &&
    css`
      background: ${props.theme.background};
      color: ${props.theme.primaryTextColor};
    `};
`;
const AppBox = styled.div`
  max-width: 960px;
  width: 90%;
  margin: 0 auto;
`;

export { AppMain, AppBox };
