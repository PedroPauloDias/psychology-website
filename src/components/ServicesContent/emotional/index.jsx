import React from 'react'
import * as S from './style'
import { Form } from '@/src/components/Form'

export const EmotionalContent = () => {
  return (
    <>
      <S.ContainerContent>
      <div>
          <img src='/images/emocionais.webp' alt=''
            height="300" width="410" />
        </div>
   
        <S.Container>
          <S.ContainerText>
            <S.ContainerGroup>
            <S.Title>O que é ajuda emocional?</S.Title>
            <div></div>
              <S.Group>
                <div>                  
              <img src='/images/men.jpg' alt=''
                height="300" width="375" />
                </div>

            <S.Text>
              Pode-se dizer que ajuda emocional é o nome que dá significado a todo apoio moral e psicológico que alguém possa receber, além da ajuda para entender, enfrentar e superar o sofrimento do outro.
                </S.Text>
                </S.Group>
            </S.ContainerGroup>

            <S.ContainerGroup>
            <S.Title>Onde buscar esse auxílio?</S.Title>
            <S.Group>
            <S.ContainerImage>
              <img src='/images/engrenagens.jpg' alt=''
                height="300" width="375" />
            </S.ContainerImage>
            <S.Text>
              É importante deixar claro que esse tipo de auxílio pode vir tanto de um profissional da área da Psicologia quanto de pessoas leigas.
         
           
              O psicólogo, através de técnicas apropriadas e comprovadas cientificamente, irá elaborar estratégias de superação de casos como ansiedade, problemas no relacionamento, depressão, síndrome do pânico, fobias, entre outros.
           
      
            </S.Text>     
          </S.Group>
            </S.ContainerGroup>
            
            <S.ContainerGroup>
          <S.SubTitle>Entre em contato Comigo</S.SubTitle>
          <S.Group>
          <S.ContainerContact>
              <img src='/images/contato4.png' alt=''
                height="300" width="300" />
       <S.ContainerForm>
        <Form />
       </S.ContainerForm>
            </S.ContainerContact>
          </S.Group>
        </S.ContainerGroup>

           
            
          </S.ContainerText>
        </S.Container>
     

      </S.ContainerContent>
    </>
  )    
}    

