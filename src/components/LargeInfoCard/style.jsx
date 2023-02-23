import styled from "styled-components";

export const Container = styled.div`
height: 14.5rem;
background-color:#E9EFF1;
border-radius: 30px;
padding: 2.1rem;
margin: 0rem .9rem;

@media (min-width:720px){
margin: 1rem 4rem;  
}

@media (min-width:1200px){
  height: 16.5rem;
 margin: 1rem 4rem;  
}
`

export const ContainerText = styled.div`

font-family: 'Nunito';
font-style: italic;
font-weight: 400;
font-size: 1rem;
color: #17191E;

@media (min-width:720px){
  font-size: 1.3rem;
  font-weight: 400;

}
@media (min-width:1200px){
  line-height:2.5rem;
  font-size: 1.8rem;
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
margin: 1rem 0rem;
text-decoration: none;
background-color:#3F5950 ;


@media (min-width:1200px){
  height: 3rem;
  width: 10rem;
  margin-top:2rem;

}
`
export const Button = styled.a`
display: flex;
align-items: center;
justify-content: space-around;
font-weight: 200;
font-family: 'Nunito';
font-size: 1rem;
color: #3F5950;
border: none;
text-decoration: none;
margin-left:.4rem;

@media (min-width:1200px){
font-size: 1.2rem;
margin-left:.8rem;
}


&:visited{
  color:#fff;
}

`