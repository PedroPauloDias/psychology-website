import styled from "styled-components";


export const containerTitle = styled.div`
height: 10.5rem;
text-align: start;
font-weight: 700;
font-size: 1.6rem;
line-height: 2.5rem;
color: ${({theme})=> theme.text};
margin: 1.2rem;
margin-top: 4rem;
padding: 1rem;

@media (min-width: 720px){
  font-size: 2.2rem;

}
@media (min-width: 1200px){
  font-size: 2.8rem;

}
`
export const HighlightText = styled.span`
color:#EECD62;
margin-left: .1rem;
margin-right:0.5rem;
`

export const ContainerCards = styled.div`
margin: 1rem 1rem;
display: flex;
align-items: center;
justify-content: center;
gap:.3rem;


`
export const ContactInfoCard = styled.div`
height: 8rem;
width: 12rem;
text-align: center;
padding:1rem;
background: #F0F1F3;
color:#363537;
border-radius: 20px;
font-weight: 700;
margin-bottom:1rem;

@media (min-width: 720px){
height: 11rem;
width: 14rem;
margin-left:2rem
}

@media (min-width: 1200px){
height: 14rem;
width: 19rem;

}

`
export const Text = styled.p`
font-size: 1rem;

@media (min-width: 720px){
  margin: 1.2rem 0rem;
font-size:1.2rem;
}

@media (min-width: 1200px){
  margin: 2rem 0rem;
font-size:1.5rem;

}
`
  



