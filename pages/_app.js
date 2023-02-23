import { GlobalStyles, lightTheme, darkTheme } from "@/styles/ThemeConfig";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import store from "@/src/redux/store";
import { Sun, Moon } from "phosphor-react";
import * as S from "../styles/app";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    theme == "light" ? setTheme("dark") : setTheme("light");
  };


  return (
    <Provider store={store}>
      <ThemeProvider theme={theme == "light" ? lightTheme : darkTheme}>
        {theme == "light" ? (
          <S.StyledButton onClick={toggleTheme}>
            <Moon color="#000" size={20} />
          </S.StyledButton>
        ) : (
          <S.StyledButton onClick={toggleTheme}>
            <Sun color="#fff" size={20} />
          </S.StyledButton>
        )}
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}
