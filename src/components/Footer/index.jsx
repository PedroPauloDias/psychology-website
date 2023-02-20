import React from 'react'

import { FacebookLogo, TwitterLogo, InstagramLogo, LinkedinLogo } from 'phosphor-react'
import * as S from './style'

export const Footer = () => {




  return (
    <footer>
      <S.Container data-aos="fade-down">
        <div>
          <S.SocialMediaList>
            <S.SocialMedia>
              <a href="#"><FacebookLogo size={30} color='#fff' /></a>
            </S.SocialMedia>
            <S.SocialMedia>
              <a href="#"> <TwitterLogo size={30} color='#fff' /></a>
            </S.SocialMedia>
            <S.SocialMedia>
              <a href="#"><InstagramLogo size={30} color='#fff' /></a>
            </S.SocialMedia>
            <S.SocialMedia>
              <a href="#"><LinkedinLogo size={30} color='#fff' /></a>
            </S.SocialMedia>
          </S.SocialMediaList>
        </div>
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
