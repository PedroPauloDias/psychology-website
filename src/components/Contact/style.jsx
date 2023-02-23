import styled from "styled-components";


export const containerTitle = styled.div`
height: 10.5rem;
text-align: center;
font-family: 'Nunito';
font-weight: 700;
font-size: 1.5rem;
line-height: 2.5rem;
color: ${({theme})=> theme.text};
margin: 1.2rem;
margin-top: 4rem;

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
height: 7rem;
width: 11rem;
text-align: center;
padding:.7rem;
background: #F0F1F3;
color:#363537;
border-radius: 20px;
font-family: 'Nunito';
font-weight: 700;
font-size: .8rem;
margin-bottom:1rem;
@media (min-width: 720px){
height: 10rem;
width: 13rem;
margin-left:2rem
}

@media (min-width: 1200px){
height: 13rem;
width: 16rem;
margin-left:4rem

}

`
export const Text = styled.p`
margin: .5rem 0rem;
font-size: .9rem;

@media (min-width: 720px){
  margin: 1.2rem 0rem;
font-size:1.2rem;
}

@media (min-width: 1200px){
  margin: 2rem 0rem;
font-size:1.5rem;

}
`
  



