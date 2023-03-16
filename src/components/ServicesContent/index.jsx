import React from 'react'
import * as S from './style'
import { Form } from '@/src/components/Form'


export async function getStaticProps() {

  const res = await fetch('https://www.thaynacunha.com.br//api/services')
  const data = await res.json()
  console.log(data.services)
  return {
    props: {
      servicos: data.services
    }
  }

}

export const ServicesContent = ({title, text, subTitle,secondaryText}) => {
  return (
    <>
      <div>
      <div>
<img src='/images/gratis.webp' alt=''
  height="300" width="410" />
</div>
<S.Container>
<S.ContainerText>
  <S.Title>{title}</S.Title>
  <S.Text>
   {text}
  </S.Text>
        
  <S.Title>{subTitle}</S.Title>
  <div>
    <img src='/images/cognitiva.jpeg' alt=''
      height="300" width="375" />
  </div>
  <S.Text>{secondaryText}
  </S.Text>        
  <S.SubTitle>Entre em contato Comigo</S.SubTitle>
  <Form/>
</S.ContainerText>
</S.Container>
    
    </div> 
    </>
  )
}

