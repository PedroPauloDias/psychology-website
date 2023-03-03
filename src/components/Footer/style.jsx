import styled from "styled-components";


export const Container = styled.div`

background-color: #3F5950;
height: 9.5rem;
color:#fff;
display: flex;
flex-direction: column;
align-items: space-around;

@media (min-width:720px){
  height: 12.5rem;
  padding:1.5rem
}

@media (min-width: 1200px){
width: 95%;
border-radius: 20px;
margin-left: 1rem;
}

@media (min-width: 1500px){
width: 95%;
border-radius: 20px;
margin-left: 1rem;
}

`


export const FooterText = styled.div`
font-size: .9rem;
text-align: center;


`