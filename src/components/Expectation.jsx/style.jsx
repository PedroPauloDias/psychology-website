import styled from "styled-components";

export const Container = styled.div`
display: flex;
align-items: center;
flex-direction: column;
justify-content: space-around;
margin:1rem;


@media (min-width: 1200px){
padding: 1.5rem 2rem;
  }
  @media (min-width: 1500px){
padding: 1.5rem 1rem;

  }
  @media (min-width: 1600px){
    padding: 1.5rem 1rem;
margin-left: 3rem;

  }
`

export const ContainerHeader = styled.div`

@media (min-width: 1200px){
  height: 20rem;
  display: flex;
align-items: center;
  }`

export const ContainerTitle = styled.div`
height: 10.5rem;
text-align: start;
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
  font-size: 2.5rem;
  line-height: 4rem;
  margin: 1rem 0;
  width: 40%;

}
`

export const ContainerInfoCard = styled.div`
display: none;
@media (min-width: 1200px){
  display: initial;

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

@media (min-width: 1200px){
  grid-template-columns: repeat(3, 1fr);
    gap: 3rem 5rem ;
}

@media (min-width: 1500px) {
  width: 100%;
  grid-template-columns: repeat(6, 1fr);
gap: 1.5rem ; 
margin-left:1rem;
}

@media (min-width: 1600px) {
  width: 100%;
  grid-template-columns: repeat(6, 1fr);
gap: 1.2rem ;}


`
