import styled from "styled-components";

export const SocialMediaList = styled.ul`

display: flex;
align-items: center;
justify-content: center;
gap:1.5rem;
margin-top:1.5rem;
margin-bottom: 1.5rem;
margin-right: 1rem;

`
export const SocialMedia = styled.li`
text-decoration: none;
list-style: none;


svg {
  color: ${({ title }) => title ? '#fff' : 'red'}
  };
 &:hover {

transition: .2s;
 }
`