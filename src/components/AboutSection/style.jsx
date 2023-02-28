import styled from "styled-components";

export const AboutContainer = styled.div`

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 1.5rem;


@media (min-width: 720px) {
  flex-direction: row;
  margin-left:1rem;
}
@media (min-width: 1200px){
margin: 3rem 1.5rem;
border-radius: 20px;
background-color: #3F5950;
justify-content: space-around;


}
`