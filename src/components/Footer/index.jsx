import React from 'react'
import { SocialMedias } from '../SocialMedias'
import { LocalMap } from '../LocalMap'

import * as S from './style'

export const Footer = () => {





  return (
    <footer>
      <S.Container >
      <SocialMedias/>
        <S.FooterText >
          <S.ModalMap>
            <p>Rua João Evangelista nº 303  , Itapetininga-Sp </p>
            <div>             
            <LocalMap/>
            </div>
          </S.ModalMap>
          <p>
            Todos os direitos reservados
            © 2023 Copyright
          </p>
          <p>
            Desenvolvido por Pedro Dias .
          </p>

        </S.FooterText>
      </S.Container>
    </footer>
  )

}

