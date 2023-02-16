import styled, { css } from "styled-components";

export const ContainerMenu = styled.div`
height: 100%;
width: 100%;
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
display: flex;
flex-direction: column;
z-index: 10;
backdrop-filter: blur(2px);
background: rgb(63,89,80);
background: linear-gradient(166deg, rgba(63,89,80,1) 53%, rgba(217,193,150,1) 100%);
`
export const ContainerLink = styled.ul`
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
margin-left: 28%;
gap: 2.2rem;
`
export const ListLink = styled.li`
text-decoration: none;
list-style: none;
`
export const Link = styled.a`
text-decoration: none;
color:#fff;
font-size:1.8rem;
font-weight: 400;
font-family: 'Nunito';
font-style: italic;

&:hover {
  border-bottom: 1px solid #D9C196;
}
`
export const OpenMenu = styled.div`
height: 2.5rem;
display: flex;
align-items: center;
justify-content: end;
background-color: transparent;
`
export const OpenButton = styled.button`
border: none;
background-color: transparent;
padding-right: 1rem ;
cursor: pointer;
position: absolute;
top: 1rem;
right: .1rem;
display: block;

@media (min-width: 720px){
  display: none;
}
`

export const CloseButton = styled.button`
font-size: 1.2rem;
position: absolute;
right:1rem;
top: 1rem;
color: #fff;
border: none;
background-color: transparent;
cursor: pointer;
`

