import React from 'react'
import {Plus} from 'phosphor-react'
import * as S from './style'

const Card = ({title}) => {
  return (
      <S.Container  >
      <S.Title>{title}</S.Title>
        <S.Button><Plus  weight="bold" color="#17191E" /></S.Button>
      </S.Container>
  )
}

export default Card