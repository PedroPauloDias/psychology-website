import styled from "styled-components";

export const Container = styled.div`

@media (min-width: 1200px){
height: 55rem;
display: grid;
grid-template-columns: repeat(2 ,1fr);
grid-template-areas: 
 "title form"
 "cards form"
 "footer form"

;
margin-left: 1rem;
padding: 1.5rem 0rem;
}
@media (min-width: 1500px){
gap:2rem;
padding:5rem 1rem
}
`

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
  grid-area: title;
  font-size: 2.8rem;
  margin: 5rem 0rem 1rem 1rem;
  line-height: 3.5rem;

}
@media (min-width: 1500px){

  margin: 5rem 0rem 2rem 1rem;
  line-height: 3.5rem;

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

@media (min-width: 1200px){
  height: 10rem;
  grid-area: cards;
  margin-bottom: -5rem;
  gap: .5rem
 
}
@media (min-width: 1500px){

  gap: 1rem;
  margin-bottom: -2rem;
 
}


`

export const ContainerForm = styled.div`
@media (min-width: 1200px){
  grid-area: form;


}
`
export const ContainerFooter = styled.div`
@media (min-width: 1200px){
  grid-area: footer;

}
@media (min-width: 1500px){
width: 100%;
border-radius: 20px;
}
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
height: 9rem;
width: 19rem;
margin: 0;
}
@media (min-width: 1500px) {
  height: 11rem;
width: 21rem;
}

`
export const Text = styled.p`
font-size: 1rem;

@media (min-width: 720px){
  margin: 1.2rem 0rem;
font-size:1.2rem;
}

@media (min-width: 1200px){
  margin: 1rem 0rem;
font-size:1.3rem;

}
`
  



