import React from 'react'
import { useState } from 'react'
import { List, X } from 'phosphor-react'


import * as S from './style'

export const MenuMobile = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  
  const openMenu = () => {
    setMenuIsOpen(!menuIsOpen)
  }

  return (
    <navbar>    
      {menuIsOpen == true ?        
        (
          <S.ContainerMenu   >       
            <S.CloseButton onClick={openMenu}>
              <X/>
            </S.CloseButton>
        <S.ContainerLink>
          <S.ListLink>
            <S.Link href="#">Home</S.Link>
          </S.ListLink>
          <S.ListLink>
            <S.Link href="#">Serviços</S.Link>
          </S.ListLink>
          <S.ListLink>
            <S.Link href="#">Sobre mim</S.Link>
          </S.ListLink>
          <S.ListLink>
            <S.Link href="#">Contato</S.Link>
          </S.ListLink>
          <S.ListLink>
            <S.Link href="#">Whatsapp</S.Link>
          </S.ListLink>
            </S.ContainerLink>
            </S.ContainerMenu>
    
            )
          :
        (
          <S.OpenMenu>        
            <S.OpenButton onClick={openMenu}><List size={25} /></S.OpenButton>          
          </S.OpenMenu>
          )          
      }             
    </navbar>

  )
}
