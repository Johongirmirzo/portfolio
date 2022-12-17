import React from "react";
import { GridLoader } from "react-spinners";
import { useThemeContext } from "../../context/ThemeContext";
import { LoaderBox } from "./index.styled";

const Loader = () => {
  const theme = useThemeContext();
  return (
    <LoaderBox theme={theme.isLightMode ? theme.theme.light : theme.theme.dark}>
      <GridLoader color="#ef3d32" />
    </LoaderBox>
  );
};

export default Loader;
