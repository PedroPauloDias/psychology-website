import React from 'react'
import * as S from './style'
import { CaretRight } from 'phosphor-react'
export const InfoCard = ({ number, title, text, background }) => {
  return (


    <S.Container background={background}>
      <S.NumberContainer background={background}>
        {
          number === 'icon' ?
            <span><CaretRight size={13} color='#000' /></span>
            : <span>{number}</span>
        }
      </S.NumberContainer >
      <S.ContainerTitle>
        <p>{title}</p>
      </S.ContainerTitle>
      <S.ContainerText>
        <p>{text}</p>
      </S.ContainerText>
    </S.Container>



  )
}
