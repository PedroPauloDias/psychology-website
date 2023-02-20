import React from 'react'
import * as S from './style'

export const InfoCard = ({number , title , text}) => {
  return (


    <S.Container data-aos="zoom-in-up">
      <S.NumberContainer>
        <span>{number }</span>
      </S.NumberContainer>
      <S.ContainerTitle>
        <h4>{title}</h4>
      </S.ContainerTitle>
      <S.ContainerText>
        <p>{text}</p>
      </S.ContainerText>
    </S.Container>


 
  )
}
