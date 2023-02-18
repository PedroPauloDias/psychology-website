import React from 'react'
import * as S from './style'
import {Form} from'../Form'
import { Footer } from '../Footer'

export const Contact = () => {
  return (
    <div>
      <S.containerTitle>
        <h3>
          Agende já uma
         <S.HighlightText> consulta gratuita</S.HighlightText>
           pra gente se conhecer</h3>
      </S.containerTitle>
      <S.ContainerCards>
        <S.ContactInfoCard>
          <p>contato@thaynacunha
            .com.br</p>
          <p>+55 15 99813 2212</p>
        </S.ContactInfoCard>
        <S.ContactInfoCard>
          <p>Horario de atendimento</p>
          <S.Horary>Seg - Ter: 12:00 - 19:00</S.Horary>
        </S.ContactInfoCard>
      </S.ContainerCards>
        <Form/>
      <Footer/>
    </div>
  )
}
