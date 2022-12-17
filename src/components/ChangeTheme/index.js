import React from "react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { useThemeContext } from "../../context/ThemeContext";
import { ChangeThemeButton } from "./index.styled";

const ChangeTheme = () => {
  const theme = useThemeContext();

  return (
    <ChangeThemeButton
      animate={{ scale: [1, 2, 1] }}
      transition={{ times: [0, 0.1, 0.9, 1], delay: 1.5 }}
      onClick={theme.toggleTheme}
      theme={theme.isLightMode ? theme.theme.light : theme.theme.dark}
    >
      {!theme.isLightMode ? <BsFillSunFill /> : <BsFillMoonFill />}
    </ChangeThemeButton>
  );
};

export default ChangeTheme;
