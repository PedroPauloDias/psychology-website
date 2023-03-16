import React from 'react'
import * as S from './style'
import { MenuMobile } from '../MenuMobile'

export const Navbar = () => {  

  return (
    <S.Container >
      <nav>
        <S.ContainerList >     
          <S.LinkList>
            <S.A href="/">Home</S.A>
          </S.LinkList>
          <S.LinkList>
            <S.A href="/atendimento">Atendimento</S.A>
          </S.LinkList>
          <S.LinkList>
            <S.A href="/about">Sobre mim</S.A>
          </S.LinkList>
          <S.LinkList>
            <S.A href="#">Contato</S.A>
          </S.LinkList>
          <S.LinkList>
            <S.A href="/info">Informações</S.A>
          </S.LinkList>
        <MenuMobile/>
        </S.ContainerList>
      </nav>
    </S.Container>
  )
}
