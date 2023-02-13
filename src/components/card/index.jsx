import React from 'react'
import {Plus} from 'phosphor-react'
import * as S from './style'

const Card = () => {
  return (
      <S.Container>
        <S.Title>Agende para uma consulta gratuita</S.Title>
        <S.Button><Plus  weight="bold" color="#17191E" /></S.Button>
      </S.Container>
  )
}

export default Card