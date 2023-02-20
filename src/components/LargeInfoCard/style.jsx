import styled from "styled-components";

export const Container = styled.div`
height: 15rem;
background-color:#E9EFF1;
border-radius: 30px;
padding: 2.1rem;
margin: 0rem 1.5rem;

@media (min-width:720px){
margin: 1rem 5rem;  
}
`

export const ContainerText = styled.div`

font-family: 'Nunito';
font-style: italic;
font-weight: 200;
font-size: 1rem;
color: #17191E;

@media (min-width:720px){
  font-size: 1.2rem;
  font-weight: 400;

}


`
export const ContainerButton = styled.div`
height: 2rem;
width: 8rem;
border-radius:30px;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 .7rem;
margin: 1.5rem 0rem;
text-decoration: none;
background-color:#3F5950 ;
`
export const Button = styled.a`
display: flex;
align-items: center;
justify-content: space-around;
font-weight: 200;
font-family: 'Nunito';
font-style: italic;
font-size: .9rem;
color: #3F5950;
border: none;
text-decoration: none;
margin-left:.4rem;


&:visited{
  color:#fff;
}

`