import styled from "styled-components";


export const Container = styled.div`

width: 20.2rem;
background-color: #3F5950;
color: ${({ theme }) => theme.textCard2};
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-around;
padding: 1rem;


@media (min-width: 720px) {
  height: 25rem;
  width: 22.5rem;
  margin-right: 1rem;
  margin-top: 5rem;

  
}
@media (min-width: 1200px) {
  height: 26rem;
  width: 32rem;
  margin-right: 0rem;

}
`
export const Title = styled.p`
font-weight: 700;
font-size: 2rem;
font-family: 'Nunito';
font-style: italic;


@media (min-width: 720px) {
  margin:1rem;

}

@media (min-width: 1200px) {
  margin-left:1rem
}
`

export const Description = styled.p`
font-family: 'Nunito';
font-style: italic;
font-weight: 200;
font-size: 1.2rem;
color:  ${({ theme }) => theme.textCard2};
opacity: .7;
margin:.5rem 0;

@media (min-width: 720px) {
  margin: 0 1rem;
}

@media (min-width: 1200px) {
  margin-left:1rem
}
`
export const Button = styled.button`
height: 2rem;
width: 9.5rem;
border-radius:1.5rem;
display: flex;
align-items: center;
justify-content: space-around ;
padding: 0.5rem 1.2rem;
font-weight: 200;
font-family: 'Nunito';
font-style: italic;
font-size: 1rem;
color: ${({theme})=>theme.textCard};;
margin-top : 1rem  ;
margin-bottom: .5rem;
border: none;

transition:.5s;
cursor: pointer;

@media (min-width: 720px) {
  margin:2rem .5rem 2rem .5rem
}

@media (min-width: 1200px) {
  margin-left:1rem
}
`