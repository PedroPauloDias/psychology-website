import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction : column;
gap: 1rem;
alig-items: center;
justify-content: center;
padding: .8rem ;


@media (min-width: 720px){

display: grid;
}

@media (min-width: 1200px){
  max-width: 1000px;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom:4rem;
  margin: 5rem 7rem;

}



`