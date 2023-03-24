import React from 'react'
import { FacebookLogo, TwitterLogo, InstagramLogo, LinkedinLogo } from 'phosphor-react'
import * as S from './style'

export const SocialMedias = () => {
  return (
    <div>


          <S.SocialMediaList>
            <S.SocialMedia   title='facebook' >
              <a href="#"><FacebookLogo   /></a>
            </S.SocialMedia>
            <S.SocialMedia title='twitter'>
              <a href="#"> <TwitterLogo   /></a>
            </S.SocialMedia>
            <S.SocialMedia  title='instagram'>
              <a href="#"><InstagramLogo  /></a>
            </S.SocialMedia>
            <S.SocialMedia title='linkedin'>
              <a href="#"><LinkedinLogo   /></a>
            </S.SocialMedia>
          </S.SocialMediaList>
        </div>
  )
}
