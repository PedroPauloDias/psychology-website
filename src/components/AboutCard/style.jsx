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
border-radius: 20px;
padding: 1.5rem;





@media (min-width: 720px) {
  height: 29rem;
  margin-right: 1rem;
  margin-top: 8rem;
  padding: 1rem;

  
}
@media (min-width: 1200px) {
  height: 24rem;
  width: 30rem;
  padding: 1.5rem 2rem ;
  margin: 0;

}
`
export const Title = styled.h3`
font-weight: 600;
font-size: 1.8rem;
width: 100%;
height: 2.5rem;
padding:.5rem 1rem;


@media (min-width: 720px) {
margin-top: 1.5rem;
  
}


@media (min-width: 1200px) {
  padding: 1rem;
}
`

export const Description = styled.p`
width: 100%;
height: 13.5rem;
padding:.5rem 1rem;
line-height:1.5rem;

font-size: 1.1rem;
color:  ${({ theme }) => theme.textCard2};
margin:1rem 0;


@media (min-width: 720px) {
  height: 15rem;
  line-height: 1.7rem;
  margin-top: 2.5rem;
}

@media (min-width: 1200px) {
  height: 11rem;
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
margin-bottom: 1rem;
margin-left: 1rem;

border: none;

transition:.5s;
cursor: pointer;

@media (min-width: 720px) {
  margin:2rem .5rem 2rem .5rem
}

@media (min-width: 1200px) {
  margin: 0 0 0 1rem;
}
`