import styled from 'styled-components';

export const FloatButton = styled.a`
  position: fixed;
  width: 4rem;
  height:  4rem;
  bottom: 5px;
  right: 5px;
  background-color: #47625d;
  opacity: .8;
  color: #FFF;
  border-radius: 50px;
  display: flex;
align-items: center;
justify-content: center;
  font-size: 30px;
  z-index: 100;
  border: unset;
  outline: none;
  transition: all 0.5s;


  @media (min-width: 1200px){

width: 6rem;
height: 6rem;
bottom: 10px;
  right: 10px;


}


@media (min-width: 2000px){

width: 6rem;
height: 6rem;
bottom: 50px;
  right: 500px;

}

  svg {
font-size:4rem;
transition: all 0.5s;
}
  &:hover {
height: 45px;  
width: 45px;
svg  {
  font-size: 1.8rem;
}


}
`;

