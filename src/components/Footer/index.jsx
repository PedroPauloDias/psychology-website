import React from 'react'
import { SocialMedias} from '../SocialMedias'

import * as S from './style'

export const Footer = () => {




  return (
    <footer>
      <S.Container data-aos="fade-down">
      <SocialMedias/>
        <S.FooterText className="animate__animated animate__bounce">
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
