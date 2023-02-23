import React from 'react'
import * as S from './style'
import {Form} from'../Form'
import { Footer } from '../Footer'

export const Contact = () => {
  return (
    <div>
      <S.containerTitle data-aos="fade-right">
        <h3>
          Agende já uma
         <S.HighlightText> consulta gratuita</S.HighlightText>
           pra gente se conhecer</h3>
      </S.containerTitle>
      <S.ContainerCards  >
        <S.ContactInfoCard data-aos="fade-right" data-aos-delay="1000">
          <S.Text>contato@thaynacunha
            .com.br</S.Text>
          <S.Text>+55 15 99813 2212</S.Text>
        </S.ContactInfoCard>
        <S.ContactInfoCard data-aos="fade-right" data-aos-delay="1000" >
          <S.Text>Horario de atendimento</S.Text>
          <S.Text>Seg - Ter: 12:00 - 19:00</S.Text>
        </S.ContactInfoCard>
      </S.ContainerCards>
        <Form/>
      <Footer/>
    </div>
  )
}
