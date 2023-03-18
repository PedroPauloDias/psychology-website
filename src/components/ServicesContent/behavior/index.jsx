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
            <S.Title>Terapia Comportamental</S.Title>
            <S.Text>
              A Terapia Comportamental, ou Terapia Analítico Comportamental é uma forma de intervenção aos problemas psicológicos que se destaca pela objetividade e pelos resultados mensuráveis.
            </S.Text>
            <S.Text>
              Possui um amplo conjunto de técnicas bem descritas e constantamente testadas em situações e problemas abordados pela psicologia aplicada.
            </S.Text>
            <S.Text>
              É baseada na filosofia de ciência conhecida como Behaviorismo Radical e na ciência do comportamento, Análise Experimental do Comportamento.
            </S.Text>
            <S.Text>
              A proposta do Behaviorismo Radical defende que o comportamento dos organismos é ordenado.
            </S.Text>
            <S.Text>
              Dessa forma, passível de ser estudado cientificamente na mesma forma das ciências naturais.
            </S.Text>

            <S.Title>O Terapeuta Comportamental</S.Title>
            <div>
              <img src='/images/cognitiva.jpeg' alt=''
                height="300" width="375" />
            </div>
            <S.Text>

              Para o terapeuta comportamental, pensamentos e sentimentos são considerados comportamentos, diferentes apenas pela forma como se pode ter acesso a eles.
            </S.Text>
            <S.Text>
              Pois este se dá através do relato verbal daquele que pensa e sente. Sendo assim, pensamentos e sentimentos, também, são levados em consideração, analisados e passíveis das intervenções do terapeuta.

              O terapeuta comportamental entende que o cliente é único e seus problemas ou dificuldades são produto de uma história particular.
            </S.Text>
            <S.Text>
  

              O principal instrumento do profissional que utiliza essa modalidade de terapia é a análise funcional, ou o levantamento criterioso das variáveis que estejam funcionalmente relacionados aos comportamentos desejáveis e indesejáveis do cliente.
            </S.Text>
           
      
        
            <S.Text>
              De modo que as pessoas se beneficiem, de forma considerável, quando buscarem a Terapia Comportamental.
            </S.Text>
            <S.SubTitle>Entre em contato Comigo</S.SubTitle>
          </S.ContainerText>
        </S.Container>
        <Form />

      </S.ContainerContent>
    </>
  )
}

