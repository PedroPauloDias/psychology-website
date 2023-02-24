import React from 'react'
import { FacebookLogo, TwitterLogo, InstagramLogo, LinkedinLogo } from 'phosphor-react'
import * as S from './style'

export const SocialMedias = () => {
  return (
    <div>


          <S.SocialMediaList>
            <S.SocialMedia   title='facebook' >
              <a href="#"><FacebookLogo size={30}   /></a>
            </S.SocialMedia>
            <S.SocialMedia title='twitter'>
              <a href="#"> <TwitterLogo size={30}   /></a>
            </S.SocialMedia>
            <S.SocialMedia  title='instagram'>
              <a href="#"><InstagramLogo size={30}  /></a>
            </S.SocialMedia>
            <S.SocialMedia title='linkedin'>
              <a href="#"><LinkedinLogo size={30}   /></a>
            </S.SocialMedia>
          </S.SocialMediaList>
        </div>
  )
}
