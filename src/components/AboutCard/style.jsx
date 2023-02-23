import styled from "styled-components";


export const Container = styled.div`
height:25rem;
width: 22rem;
background-color: #3F5950;
color: ${({ theme }) => theme.textCard2};
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-around;
padding: 1rem 1.5rem;
border-radius: 20px;


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
font-weight: 600;
font-size: 1.5rem;

@media (min-width: 720px) {
  margin:1rem;

}

@media (min-width: 1200px) {
  margin-left:1rem
}
`

export const Description = styled.p`
font-style: italic;
font-weight: 200;
font-size: 1.1rem;
color:  ${({ theme }) => theme.textCard2};
margin:1rem 0;

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
border-radius:10px;
display: flex;
align-items: center;
justify-content: space-around ;
padding: 0.5rem 1.2rem;
font-weight: 200;
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