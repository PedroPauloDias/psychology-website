import React from 'react'
import { SocialMedias} from '../SocialMedias'

import * as S from './style'

export const Footer = () => {




  return (
    <footer>
      <S.Container >
      <SocialMedias/>
        <S.FooterText >
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
