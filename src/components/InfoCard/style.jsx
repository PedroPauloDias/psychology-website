import styled from "styled-components";

export const Container = styled.div`
height: 14rem;
width:11rem;
display: flex;
flex-direction: column;
align-items: center;
background-color:#F0F1F3;
border-radius: 30px;
padding: .7rem ;

@media (min-width: 720px) {
height:13rem;
width:11rem;
}

`
export const NumberContainer = styled.div`
height: 2rem;
width: 2rem;
margin: 1rem 0rem;
border-radius: 30px;
background-color:#EECD62 ;
text-align: center;
color: #FFFFFF;
display: flex;
align-items: center;
justify-content: center;
font-weight: 700;
font-family: 'Nunito';

@media (min-width: 720px) {
  height: 2rem;
width: 2rem;
}
`
export const ContainerTitle = styled.div`
height: 4rem;
font-family: 'Nunito';
font-weight: 700;
font-size: 1rem;
text-align: center;
color: #070A11;

@media (min-width: 720px) {
font-size: 1.1rem;
}


`
export const ContainerText = styled.div`
height: 5rem;
font-family: 'Nunito';
font-weight: 400;
font-size: .9rem;
display: flex;
align-items: flex-start;
text-align: center;
color: #070A11;


@media (min-width: 720px) {
font-size: 1rem;
}
`