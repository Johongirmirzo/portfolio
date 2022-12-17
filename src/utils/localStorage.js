const getCurrentThemeMode = () =>
  JSON.parse(localStorage.getItem("is-light-mode"));
const setCurrentThemeMode = (currentThemeModeBool) =>
  JSON.stringify(localStorage.setItem("is-light-mode", currentThemeModeBool));

export { getCurrentThemeMode, setCurrentThemeMode };
