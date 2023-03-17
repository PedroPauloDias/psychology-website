import styled, { css } from "styled-components";

export const Container = styled.div`
height: 3rem;

@media (min-width:720px )and (max-width:1190px) {
  height: 2rem;
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

@media (min-width:1200px) {
  margin-top:.5rem;
  width: 50%;
  justify-content:space-between;
  margin-left: 4rem;

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
text-decoration: none;
color : ${({theme})=> theme.text};
font-weight: 400;
font-size: 1.2rem;


@media (max-width:720px) {
  display: none;  
  
}

@media (min-width:1200px) {
  
font-size: 1.1rem;
font-weight: 500;
  
}

&:hover{
  border-bottom: 2px solid ${({ theme }) => theme.textMenuFixed};
  color: ${({ theme }) => theme.textMenuFixed};
  font-weight: 500;
}
`


