import styled from "styled-components";

export const Container = styled.div`
padding: 1rem 1.2rem;


img{
  border-radius: 15px;
  object-fit: cover;
margin-bottom: 1.5rem;

}
`

export const HighLightText = styled.span`
font-size: 1.2rem;
margin-top: -2rem;
margin-bottom: 1.5rem;
`

export const ContainerText = styled.div`
display: flex;
flex-direction: column;
`

export const Title = styled.h2`
font-size: 2rem;
margin: 2rem 0;
color: ${({theme})=> theme.contrastText};
`
export const SubTitle = styled.h3`
font-size: 1.8rem;
margin: 1rem 0;
color: ${({theme})=> theme.contrastText};
`

export const Text = styled.p`
margin-top: 1rem 0;
margin-bottom: 1rem;
font-family: inter;
font-size: 1.1rem;
line-height: 1.5rem;
`
