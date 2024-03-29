import React from 'react'
import * as S from './style'
import {Form} from'../Form'
import { Footer } from '../Footer'

export const Contact = () => {
  return (
    <S.Container>
      <S.containerTitle data-aos="fade-right">
        <h2> Agende já uma</h2>
          <S.HighlightText> consulta </S.HighlightText>
          <h2> pra gente se conhecer</h2>
      </S.containerTitle>
      <S.ContainerCards   >
        <S.ContactInfoCard >
          <S.Text>tcpsicologia23
            @gmail.com
            </S.Text>
          <S.Text>
             <S.ContrastText>tel : 15 99604 2007 </S.ContrastText>
          </S.Text>
        </S.ContactInfoCard>
        <S.ContactInfoCard  >
          <S.Text>
            Horario de atendimento
          </S.Text>
          <S.Text>
      <S.ContrastText>
            Seg - Ter:                        
          12:00 - 19:00 hrs</S.ContrastText>      
          </S.Text>
        </S.ContactInfoCard>
      </S.ContainerCards>
      <S.ContainerForm>
        <Form/>
      </S.ContainerForm>
      <S.ContainerFooter>
      <Footer />
      </S.ContainerFooter>
    </S.Container>
  )
}
