import styled from "styled-components";



export const ModalMenu = styled.div`
height: 100vh;
width: 100vw;
    background:rgba(0, 0, 0, 0.692);   
`

export const ContainerMenu = styled.div`
height: 100%;
width: 50%;
left: 50%;
background-color: lightgoldenrodyellow;
color: #fff;
display: flex;
flex-direction: column;
z-index: 1000;
position: absolute;
box-shadow: 1rem 1rem 1rem #fff;
`
export const ContainerLink = styled.ul`
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
padding:2.5rem 1.5rem;

`
export const ListLink = styled.li`
text-decoration: unset;

`
export const Link = styled.a`
text-decoration: none;
color:#000;
font-size:1.8rem;

&:hover {
  border-bottom: 3px solid #000;
}

`
export const OpenedMenu = styled.div`
height: 2.5rem;
display: flex;
align-items: center;
justify-content: end;


`
export const OpenButton = styled.button`
border: none;
background-color: transparent;
padding-right: 1rem ;
cursor: pointer;


`

export const CloseButton = styled.button`
height: 1.5rem;
width: 1.5rem;
position: absolute;
left:12rem;
top: 1rem;
color: #000;
border: none;
background-color: transparent;
cursor: pointer;
`

