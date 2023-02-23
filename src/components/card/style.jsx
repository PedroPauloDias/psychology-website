import styled from "styled-components";

export const Container = styled.div`
height: 7rem;
width: 9.5rem;
border-radius: 1rem;
background-color: ${({ BackgroundColor }) => BackgroundColor || '#F0F1F3'};
display: flex;
flex-direction: column;
align-items: flex-end;
justify-content: space-between;
padding: 1rem ;




@media  (min-width:720px){
  height: 9rem;
width: 12rem;

}


@media  (min-width:1200px){
  height:12rem;
width: 15rem;
margin-top:2rem

}

`
export const Title = styled.p`
font-size: 1.1rem;
font-family: 'Nunito';
color: ${({ color }) => color || '#000'};


@media  (min-width:720px){
font-size:1.5rem

}

@media  (min-width:1200px){
  font-size:1.8rem;
  margin-left:.5rem;

}



`