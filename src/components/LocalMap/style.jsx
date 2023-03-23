import styled from "styled-components";


export const Container = styled.div`

position: absolute;

height: 100vh;
width: 100%;
top:15rem;
left: 0;
right: 0;
bottom: 0;
display: flex;
flex-direction: column;
z-index: 10;
backdrop-filter: blur(2px);
background: rgb(63,89,80);
background: linear-gradient(166deg, rgba(63,89,80,1) 53%, rgba(217,193,150,1) 100%);


.marker{
  color: red;
  margin-top: 50px;
}

`

export const Container2 = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 25rem;

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
}
`