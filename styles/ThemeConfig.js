import { createGlobalStyle } from "styled-components"

export const lightTheme = {
  body: '#fff',
  text: '#070A11',
  textCard: '#070A11',
  textCard2: '#fff',
  textMenuFixed:'#47625d',
  textCardModal:'#070A11',
  textAboutCard:'#363537',
  highlightText:'#Ebc65e' ,
  toggleBorder: '#FFF',
  background: '#363537',
  backgroundCard: "#F0F1F3",
  backgroundModal:'#fff' ,
  backgroundButton: '#070A11',
  backgroundButtonModal: "#EECD62",
  svgColor:'#000',
}

export const darkTheme = {
  body: '#363537',
  text: '#FAFAFA',
  textCard: '#3F5950',
  textCard2: '#fff',
  textMenuFixed:'#fff',
  textCardModal:'#fff',
  textAboutCard:'#363537',
  highlightText:'#47625d',
  toggleBorder: '#6B8096',
  background: ' #446258;',
  backgroundCard: "#F0F1F3",
  backgroundModal:'#47625d',
  backgroundButton: '#070A11',
  backgroundButtonModal: "#f0f1f3",
  svgColor:'#fff',
  
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
