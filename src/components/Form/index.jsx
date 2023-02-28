import React from 'react'
import * as S from './style'

import {CaretRight } from 'phosphor-react'
import SelectComponent from '../SelectItem'


export const Form = () => {
  return (
    <section>
      <S.ContainerForm>
        <S.containerInput>
          <S.Input type="text" placeholder='Nome' placeholderTextColor="green" />
        </S.containerInput>
        <S.containerInput>
          <S.Input type="email" placeholder='E-mail' />
        </S.containerInput>
        <S.containerInput>
          <S.Input type="tel" placeholder='+55    .. ... .. ..' />
        </S.containerInput>
        <S.ContainerTextArea>
          <S.TextArea
            placeholder='Deixe sua mensagem'
            rows="5" cols="33"
          ></S.TextArea>
        </S.ContainerTextArea>
        <S.TextLabel >Por onde posso te chamar ?</S.TextLabel>
        <S.ContainerSelect>
        <SelectComponent/>
        </S.ContainerSelect>
        
        <S.ContainerButton>
          <S.Button>Enviar mensagem
          <CaretRight size={15}  />
          </S.Button>
        </S.ContainerButton>
      </S.ContainerForm>
    </section>
  )
}
