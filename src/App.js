import React, { useContext, Suspense } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { Navbar, About, Projects, Contact, Footer, Loader } from "./components";
import { AppMain, AppBox } from "./App.styled";

const App = () => {
  const appTheme = useContext(ThemeContext);
  console.log(appTheme);
  return (
    <Suspense fallback={<Loader />}>
      <AppMain
        theme={
          appTheme.isLightMode ? appTheme.theme.light : appTheme.theme.dark
        }
      >
        <Navbar />
        <AppBox>
          <About />
          <Projects />
          <Contact />
          <Footer />
        </AppBox>
      </AppMain>
    </Suspense>
  );
};

export default App;
