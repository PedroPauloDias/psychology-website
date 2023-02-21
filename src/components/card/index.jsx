import React from 'react'
import * as S from './style'
import { Modal } from '../Modal'

const Card = ({title, BackgroundColor,color,text,category}) => {
  return (
      <S.Container BackgroundColor={BackgroundColor}  >
      <S.Title color={color} >{title}</S.Title>
      <Modal title={title} text={text} category={ category}  />  
      </S.Container>
  )
}

export default Card