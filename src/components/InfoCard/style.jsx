import styled from "styled-components";

export const Container = styled.div`
height:11.5rem;
width:10rem;
display: flex;
flex-direction: column;
align-items: center;
background-color:#F0F1F3;
border-radius: 30px;
padding: .5rem 0;

@media (min-width: 720px) {
height:13rem;
width:11rem;
}

`
export const NumberContainer = styled.div`
height: 1.5rem;
width: 1.5rem;
border-radius: 30px;
background-color:#EECD62 ;
text-align: center;
color: #FFFFFF;
display: flex;
align-items: center;
justify-content: center;
font-weight: 700;
font-family: 'Nunito';
margin: 1rem 0 1rem 0 ;

@media (min-width: 720px) {
  height: 2rem;
width: 2rem;
}
`
export const ContainerTitle = styled.div`

font-family: 'Nunito';
font-weight: 700;
font-size: .9rem;
text-align: center;
color: #070A11;

@media (min-width: 720px) {
font-size: 1.1rem;
}


`
export const ContainerText = styled.div`
font-family: 'Nunito';
font-style: italic;
font-weight: 400;
font-size: .9rem;
display: flex;
align-items: flex-end;
text-align: center;
color: #070A11;
margin-top: 1rem;

@media (min-width: 720px) {
font-size: 1rem;
}
`