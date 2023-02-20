import styled from "styled-components";

export const Container = styled.div`
height: 1.8rem;
margin-bottom: 1rem;

@media (min-width:720px )and (max-width:1190px) {
  height: 2rem;
}

@media (min-width:1200px) {
  height: 2.2rem;
}
`
export const ContainerList = styled.ul`
display: flex;
justify-content: end;
align-items: center;
gap: .8rem;
padding-right: .5rem;

@media (min-width:720px) {
  margin-top:.5rem;
}

`
export const LinkList = styled.li`
text-decoration: none;
list-style: none;

@media (max-width:720px) {
  display: none;  
}
`
export const A = styled.a`
height: 1.9rem;
font-family: 'Nunito';
font-style: italic;
text-decoration: none;
color : ${({theme})=> theme.text};
font-weight: 400;
font-size: 1.2rem;


@media (max-width:720px) {
  display: none;  
  
}

@media (min-width:1200px) {
  
font-size: 1.4rem;
  
}

`