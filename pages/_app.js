import { GlobalStyles, lightTheme, darkTheme } from "@/styles/ThemeConfig";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import Head from "next/head";
import { Sun, Moon } from "phosphor-react";
import * as S from "../styles/app";

import { Cinzel } from "@next/font/google";
const cinzel = Cinzel({ subsets: ["latin"] });
export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    theme == "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <>
      <Head>
        <title> Thayná Cunha Psicóloga</title>
        <link rel="shortcut icon" href="../images/psicologia-icone.png" />
        <meta name="keywords" content= "Psicóloga em itapetininga, Psicologia itapetininga, Psicologa infantil em itapetininga "   ></meta>
        <meta
        name="description"
        content="Psicóloga em itapetininga , atendimento de adultos e crianças "
        ></meta>




      </Head>
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
        <main className={cinzel.className}>
          <GlobalStyles />
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </>
  );
}
