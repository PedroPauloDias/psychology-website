import { createGlobalStyle } from "styled-components"

export const lightTheme = {
  body: '#FFF',
  text: '#070A11',
  textCard: '#070A11',
  textCard2: '#fff',
  textCardModal:'#070A11',
  textAboutCard:'#363537',
  highlightText:'#EECD62',
  toggleBorder: '#FFF',
  background: '#363537',
  backgroundCard: "#F0F1F3",
  backgroundModal:'#fff' ,
  backgroundButton: '#070A11',
  backgroundButtonModal:"#EECD62"
}

export const darkTheme = {
  body: '#363537',
  text: '#FAFAFA',
  textCard: '#3F5950',
  textCard2: '#fff',
  textCardModal:'#fff',
  textAboutCard:'#363537',
  highlightText:'#3F5950',
  toggleBorder: '#6B8096',
  background: ' #446258;',
  backgroundCard: "#F0F1F3",
  backgroundModal:'#3F5950',
  backgroundButton: '#070A11',
  backgroundButtonModal:"#f0f1f3"
  
}

export const GlobalStyles = createGlobalStyle`



*{
  margin:0;
  padding: 0;
  box-sizing: border-box;
 
}
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear;
  }
`
