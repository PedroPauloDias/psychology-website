import React from 'react'
import * as S from './style'
import { Form } from '@/src/components/Form'


export async function getStaticProps() {

  const res = await fetch('http://localhost:3000/api/services')
  const data = await res.json()
  console.log(data.services)
  return {
    props: {
      servicos: data.services
    }
  }

}

export const ServicesContent = ({ servicos }) => {
  return (
    <>
      <div>
          <div>
          {servicos.map((servico) => (
            <div key={servico.title}>
              <div>
                <img src='/images/gratis.webp' alt=''
                  height="300" width="410" />
              </div>
              <S.Container>
                <S.ContainerText>
                  <S.Title>{servico.title}</S.Title>
                  <S.Text>
                   {servico.text}
                  </S.Text>
                        
                  <S.Title>{servico.subTitle}</S.Title>
                  <div>
                    <img src='/images/cognitiva.jpeg' alt=''
                      height="300" width="375" />
                  </div>
                  <S.Text>{servico.secondaryText}
                  </S.Text>        
                  <S.SubTitle>Entre em contato Comigo</S.SubTitle>
                  <Form/>
                </S.ContainerText>
              </S.Container>
            </div>
          ))}
        </div>
    
    </div> 
    </>
  )
}

