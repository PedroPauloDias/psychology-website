import styled from "styled-components";


export const Container = styled.div`

background-color: #47625d;
color:#fff;
display: flex;
flex-direction: column;
align-items: space-around;

@media (min-width:720px){
  padding:1.5rem
}

@media (min-width: 1200px){
border-radius: 20px;
height: 13rem;
margin-top: -3rem;
margin-bottom: 2rem;
}

@media (min-width: 2000px){
  

  height: 14rem;
  padding: 1.5rem;
}



`


export const FooterText = styled.div`
font-size: .9rem;
text-align: center;
margin-bottom: 2rem;

@media (min-width: 720px){
font-size: 1.1rem;
line-height: 1.5rem;
}
@media (min-width: 1200px){
font-size:1.3rem;
line-height: 2rem;

}
@media (min-width: 2000px){
  font-size: 1.8rem;
  line-height: 2rem ;
}


`
export const ModalMap = styled.div`
display: ${({disable}) => disable  ?  "none" : "initial" };

`

export const OpenMap = styled.button`
border: none;
background-color: transparent;
color:#fff;
font-size: .8rem;
cursor: pointer;
opacity: .7;
margin: .2rem 0rem 1.5rem 0rem;

@media (min-width: 500px){
  display: none;
}`