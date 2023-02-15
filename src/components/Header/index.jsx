import React from 'react'
import { NavBar } from '../Navbar'
import { MenuMobile } from '../MenuMobile'
import Card from '../card'
import * as S from './style'


export const Header = () => {
  return (
    <header>     
    
        <S.LogoContainer>
          <S.Image src='/images/Banner.png' alt="" />
          <S.logoCards>
            <Card />
            <Card/>
          </S.logoCards>
        </S.LogoContainer>
     
          <div>
            <h2>Psicologia</h2>
            <p>conheça nossos serviços</p>
          </div>
          card
          card
          card
          card
   
    </header>
  )
}
