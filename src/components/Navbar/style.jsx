import styled from "styled-components";

export const Container = styled.div`
height: 2.2rem;

`
export const ContainerList = styled.ul`
display: flex;
justify-content: end;
gap: .5rem;
padding-right: 1rem;
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
color : #446258;
font-weight: 200;
font-size: 1.1rem;

`