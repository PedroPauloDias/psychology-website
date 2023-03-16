import styled from "styled-components";

export const Container = styled.div`
height: 7.5rem;
width: 10.5rem;
border-radius: 1rem;
background-color: ${({ BackgroundColor }) => BackgroundColor || '#F0F1F3'};
display: flex;
flex-direction: column;
align-items: flex-end;
justify-content: space-between;
padding: 1.2rem;

@media  (min-width:720px){
  height: 9rem;
width: 12rem;
}

@media  (min-width:1200px){
  height:12rem;
width: 15rem;
padding: 1rem  1.5rem;

}
@media  (min-width:1500px){
  height:13rem;
width: 16rem;
padding: 1rem  1.5rem;

}

`
export const Title = styled.p`
font-size: 1.1rem;
color: ${({ color }) => color || '#000'};


@media  (min-width:1200px){
font-size:1.5rem

}





`