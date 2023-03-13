import React, { useState } from 'react'
import * as S from './style'

import { CaretRight } from 'phosphor-react'
import SelectComponent from '../SelectItem'
import { sendContactForm } from '../lib/api'

const initValues = {
  name: "",
  email: "",
  telefone: "",
  message: "",

}
const initState = { values: initValues }

export const Form = () => {

  const [state, setState] = useState(initState)

  const { values, } = state

  const handleChange = ({ target }) => setState((prev) => ({
    ...prev,
    values: {
      ...prev.values,
      [target.name]: target.value
    }
  }))

  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
    }));
    await sendContactForm(values)
  };

  return (
    <section>
      <S.ContainerForm>
        <S.containerInput>
          <S.Input
            type="text"
            placeholder='Nome'
            placeholderTextColor="green"
            name='name'
            value={values.name}
            onChange={handleChange} />
        </S.containerInput>
        <S.containerInput>
          <S.Input
            type="email"
            placeholder='E-mail'
            name='email'
            value={values.email}
            onChange={handleChange} />
        </S.containerInput>
        <S.containerInput>
          <S.Input
            type="tel"
            placeholder='+55    .. ... .. ..'
            name="telefone"
            value={values.telefone}
            onChange={handleChange} />
        </S.containerInput>
        <S.ContainerTextArea>
          <S.TextArea
            type="text"
            placeholder='Deixe sua mensagem'
            rows="5" cols="33"
            name='message'
            value={values.message}
            onChange={handleChange}
          />
        </S.ContainerTextArea>
        <S.TextLabel >Por onde posso te chamar ?</S.TextLabel>
        <S.ContainerSelect>
          <SelectComponent />
        </S.ContainerSelect>

        <S.ContainerButton>
          <S.Button onClick={onSubmit} >Enviar mensagem
            <CaretRight size={15} />
          </S.Button>
        </S.ContainerButton>
      </S.ContainerForm>
    </section>
  )
}
