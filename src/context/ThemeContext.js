import React, { useState, useContext } from "react";
import {
  getCurrentThemeMode,
  setCurrentThemeMode,
} from "../utils/localStorage";

const theme = {
  light: {
    background: "#f7ebd4",
    primaryTextColor: "#292929",
    secondaryTextColor: "#272727",
    themeChangerBgColor: "#fff",
    themeChangerTextColor: "#111",
    introTopTitleTextColor: "hsl(166, 90%, 30%)",
    ctaBtnColor: "hsl(166, 90%, 40%)",
    textColor: "#000",
    navbarBgColor: "rgba(247, 235, 212, .85)",
    languageSwitcherColor: "hsl(39, 69%, 92%)",
  },
  dark: {
    background: "#0a192f",
    primaryTextColor: "#ccd6f6",
    secondaryTextColor: "#8892b0",
    themeChangerBgColor: "#122c54",
    themeChangerTextColor: "#fff",
    introTopTitleTextColor: "#64ffda",
    ctaBtnColor: "#122c54",
    textColor: "#fff",
    navbarBgColor: "rgba(10, 25, 47, .8)",
    languageSwitcherColor: "hsl(216, 65%, 20%)",
  },
};

export const ThemeContext = React.createContext();

const ThemeContextProvider = ({ children }) => {
  const [isLightMode, setIsLightMode] = useState(getCurrentThemeMode());
  const toggleTheme = () => {
    if (isLightMode) {
      setCurrentThemeMode(false);
      setIsLightMode(false);
    } else {
      setCurrentThemeMode(true);
      setIsLightMode(true);
    }
  };

  return (
    <ThemeContext.Provider value={{ isLightMode, toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const theme = useContext(ThemeContext);
  return theme;
};

export default ThemeContextProvider;
