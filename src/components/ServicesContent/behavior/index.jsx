import React from 'react'
import * as S from './style'
import { Form } from '@/src/components/Form'




export const BehaviorContent = () => {
  return (
    <>
      <S.ContainerContent>
        <div>
          <img src='/images/gratis.webp' alt=''
            height="300" width="410" />
        </div>
        <S.Container>
          <S.ContainerText>
            <S.ContainerGroup>
            <S.Title>Terapia Comportamental</S.Title>
                <div></div>
              <S.Group>
              <div>
            <img src='/images/puzzle.webp' alt=''
              height="400" width="375"  />
          </div>
            <S.Text>
              A Terapia Comportamental, ou Terapia Analítico Comportamental é uma forma de intervenção aos problemas psicológicos que se destaca pela objetividade e pelos resultados mensuráveis.
                      
              Dessa forma, passível de ser estudado cientificamente na mesma forma das ciências naturais.
            </S.Text>
            </S.Group>
            </S.ContainerGroup>

            <S.ContainerGroup>
            <S.Title>O Terapeuta Comportamental</S.Title>
            <S.Group>
            <div>
              <img src='/images/cognitiva.jpeg' alt=''
                height="300" width="375" />
            </div>
            <S.Text>

              Para o terapeuta comportamental, pensamentos e sentimentos são considerados comportamentos, diferentes apenas pela forma como se pode ter acesso a eles.
         
              Pois este se dá através do relato verbal daquele que pensa e sente. Sendo assim, pensamentos e sentimentos, também, são levados em consideração, analisados e passíveis das intervenções do terapeuta.  
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

