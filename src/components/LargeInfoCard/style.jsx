import styled from "styled-components";

export const Container = styled.div`
height: 10.5rem;
background-color:#E9EFF1;
border-radius: 30px;
margin: 1rem;
padding: 2.1rem;
`

export const ContainerText = styled.div`

font-family: 'Nunito';
font-style: italic;
font-weight: 200;
font-size: 1rem;
color: #17191E;


`
export const ContainerButton = styled.div`
height: 1.7rem;
width: 4.5rem;
border-radius:30px;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 .7rem;


text-decoration: none;
background-color:#070A11 ;
`
export const Button = styled.a`


display: flex;
align-items: center;
justify-content: space-around;


font-weight: 200;
font-family: 'Nunito';
font-style: italic;
font-size: .7rem;
color: #fff;
border: none;
text-decoration: none;
margin-left:.2rem;


&:visited{
  color:#fff;
}

`