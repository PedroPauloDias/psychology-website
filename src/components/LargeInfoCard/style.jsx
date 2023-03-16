import styled from "styled-components";

export const Container = styled.div`
height: 15rem;
background-color:#E9EFF1;
border-radius: 30px;
padding: 1.7rem;
margin: 2rem .5rem;

@media (min-width:720px){
width: 90%;
margin-left: 2.5rem;
}

@media (min-width:1200px){
width:50%;
height: 18rem;
padding: 2.5rem 1.5rem  ;
margin:1rem;

}

@media (min-width: 1500px) {
  width:60%;
height: 19rem;
padding: 3rem 2.5rem  ;
margin:1rem ;
margin-left: 2rem;
}
`

export const ContainerText = styled.div`

font-size: 1.1rem;
color: #17191E;

@media (min-width:720px){
  font-size: 1.2rem;
  font-weight: 400;

}
@media (min-width:1200px){
  line-height:1.5rem;
  font-size: 1.2rem;


}
@media (min-width: 1500px) {
  line-height: 1.8rem;
  font-size: 1.3rem;
 
}


`
export const ContainerButton = styled.div`
height: 2rem;
width: 9rem;
border-radius:10px;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 .7rem;
margin: 1rem 0rem;
text-decoration: none;
background-color:#3F5950 ;




@media (min-width:1200px){
  height: 3rem;
  width: 10rem;
  margin-top:2rem;

}
@media (min-width: 1500px) {
  margin-top:3rem;
 
}
`
export const Button = styled.a`
display: flex;
align-items: center;
justify-content: space-around;
font-weight: 200;
font-size: 1rem;
color: #fff;
border: none;
text-decoration: none;
margin-left:.4rem;

@media (min-width:1200px){
font-size: 1rem;
margin-left:.8rem;
}


&:visited{
  color:#fff;
}

`