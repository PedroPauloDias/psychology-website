import styled from "styled-components";

export const Container = styled.div`
height: 15rem;
width:11rem;
display: flex;
flex-direction: column;
align-items: center;
background-color: ${({ background }) => background === 'yellow' ?
    '#Ebc65e' : '#F0F1F3'};
border-radius: 30px;
padding: 1rem .8rem;




@media (min-width: 720px) {
  height:16rem;
width:13rem;
padding: 1rem;
}
@media (min-width: 1200px) {
  height:18rem;
width:10.5rem;
padding: 1rem;
}
@media (min-width: 1400px) {
  height:19rem;
width:12rem;
padding: 1rem;

}



`
export const NumberContainer = styled.div`
height: 2rem;
width: 2rem;
margin: 1rem 0rem;
border-radius: 30px;
background-color:${({ background }) => background  ?'#F0F1F3': '#Ebc65e'  };
text-align: center;
color: #FFFFFF;
display: flex;
align-items: center;
justify-content: center;
font-weight: 700;

@media (min-width: 720px) {
  height: 2rem;
width: 2rem;
}
`
export const ContainerTitle = styled.div`
height: 4rem;
font-weight: 600;
font-size: 1.1rem;
text-align: center;
color: #070A11;

@media (min-width: 720px) {
font-size: 1.1rem;
}


`
export const ContainerText = styled.div`
height: 5rem;
font-size: 1rem;
display: flex;
align-items: center;
text-align: center;
color: #070A11;


@media (min-width: 720px) {
font-size: 1rem;
}


@media (min-width: 1200px) {
font-size: 1.1rem;
margin-top: 1rem;
}
`
