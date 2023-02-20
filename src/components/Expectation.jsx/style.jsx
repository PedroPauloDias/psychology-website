import styled from "styled-components";

export const Container = styled.div`
display: flex;
align-items: center;
flex-direction: column;
justify-content: space-around;
margin:1rem;
`

export const ContainerTitle = styled.div`
height: 10.5rem;
text-align: center;
font-family: 'Nunito';
font-weight: 700;
font-size: 1.5rem;
line-height: 2.5rem;
color: ${({theme})=>theme.text};
margin:  1.5rem 1.2rem 0rem 1.2rem;

@media (min-width: 720px) {
  font-size: 2rem;
  margin-top: 3rem;
  line-height: 4rem;
  padding:0 1rem;
}
@media (min-width: 1200px) {
  font-size: 2.9rem;
  margin-top: 3rem;
  line-height: 4rem;
  margin-bottom: 2rem;

}
`

export const ContainerCards = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem 1rem;
  margin: 1.5rem 0;

  @media (min-width: 720px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem 1rem ;
}
@media (min-width: 1200px) {
  grid-template-columns: repeat(6, 1fr);
  gap: 1rem 1.3rem ;
  margin:  3rem 0;

}

`