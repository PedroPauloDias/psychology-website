import React from 'react'
import { FacebookLogo, TwitterLogo, InstagramLogo, LinkedinLogo } from 'phosphor-react'
import * as S from './style'

export const Footer
  = () => {
    return (
      <footer>
        <S.Container>
          <div>
            <S.SocialMediaList>
              <S.SocialMedia>
                <a href="#"><FacebookLogo size={25} color='#fff' /></a>
              </S.SocialMedia>
              <S.SocialMedia>
                <a href="#"> <TwitterLogo size={25} color='#fff' /></a>
              </S.SocialMedia>
              <S.SocialMedia>
                <a href="#"><InstagramLogo size={25} color='#fff' /></a>
              </S.SocialMedia>
              <S.SocialMedia>
                <a href="#"><LinkedinLogo size={25} color='#fff' /></a>
              </S.SocialMedia>
            </S.SocialMediaList>
          </div>
          <S.FooterText>
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
