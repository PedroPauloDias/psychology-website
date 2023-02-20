import React from 'react'
import 'animate.css';


import Card from '../card'
import * as S from './style'


export const Header = () => {



  return (
    <>
  
      <S.LogoContainer>
        <S.Image src='/images/logo.jpg' alt="" />
      </S.LogoContainer>
      <S.Container>
        <S.ContainerTitle >
          <S.Title className="animate__animated animate__fadeInDown animate__slow animate__delay-2s">Psicologia</S.Title>
          <S.SubTitle className="animate__animated animate__fadeInDown animate__slow animate__delay-3s">conheça nossos serviços</S.SubTitle>
        </S.ContainerTitle>
        <S.Cards>
          <Card />
          <Card />       
          <Card />
          <Card />
        </S.Cards>
      </S.Container>
  </>
  )
}
