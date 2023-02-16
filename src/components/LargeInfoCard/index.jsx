import React from 'react'
import {CaretRight}from 'phosphor-react'
import * as S from './style'

export const LargeCardInfo = () => {
  return (
    <S.Container>
      <S.ContainerText>
        <p>Após a primeira reunião gratuita, você expressa seu problema e o que deseja em troca. E estamos chegando a esse resultado em cinco encontros. Cada reunião tem seu próprio propósito, portanto, após cada uma você obtém seus resultados:</p>
      </S.ContainerText>
      <S.ContainerButton >
        <S.Button href='#'>Saiba Mais </S.Button>
        <CaretRight size={15} color='#fff'/>
      </S.ContainerButton>
    </S.Container>
  )
}
