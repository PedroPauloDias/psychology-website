import styled from "styled-components";


export const Container = styled.div`

background-color: #47625d;
color:#fff;
display: flex;
flex-direction: column;
align-items: space-around;

@media (min-width:720px){
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
margin-bottom: 2rem;

@media (min-width: 720px){
font-size: 1.1rem;
line-height: 1.5rem;
}


`
export const ModalMap = styled.div`

`

export const OpenMap = styled.button`
border: none;
background-color: transparent;
color:#fff;
font-size: .8rem;
cursor: pointer;
opacity: .7;
margin: .2rem 0rem 1.5rem 0rem;

@media (min-width: 500px){
  display: none;
}`