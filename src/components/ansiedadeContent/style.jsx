import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction : column;
gap: 1rem;
align-items: center;
justify-content: center;
padding: .8rem ;


@media (min-width: 720px){

display: grid;
}

@media (min-width: 1200px){
  max-width: 1000px;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom:4rem;
  margin: 5rem auto;
  img{
    height:28rem;
    width: 32rem;
    
  };

}
@media (min-width: 1500px){
  max-width: 1000px;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom:4rem;
  margin: 5rem auto;
  img{
    height:35rem;
    width: 40rem;
    
  };

};

@media (min-width: 2000px){
width: 1000px;
  grid-template-columns: repeat(2, 1fr);
  margin: 5rem auto;

  gap: 2rem ;


  img{
    height:38rem;
    width: 42rem;
  }

}



`