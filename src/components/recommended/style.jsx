import styled from "styled-components";

export const Container = styled.div`
margin: 0 auto;
box-shadow:  -3px 3px 20px ${({theme}) => theme.boxShadowColor},
             3px -3px 20px ${({theme}) => theme.boxShadowColor2};

margin: 0 2rem;
.slick-prev::before,
.slick-next:before 
{
display: none !important;
cursor: auto !important;
}

`


export const Title = styled.h2 `
height: 8rem;
text-align: start;
font-weight: 700;
font-size: 1.5rem;
line-height: 2.5rem;
margin-top:2.5rem;
padding: 1rem 1.5rem;
`