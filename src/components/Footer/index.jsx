import React,{useState, useEffect} from 'react'
import { SocialMedias } from '../SocialMedias'
import { LocalMap } from '../LocalMap'

import * as S from './style'

export const Footer = () => {

  const [openedMap, setOpenedMap] = useState(false)

 useEffect(() => {
    document.body.style.overflowY = openedMap ? 'hidden' : 'auto'
 }, [openedMap])

  function handleMap() {
    setOpenedMap(!openedMap)
  }

  return (
    <footer>
      <S.Container >
      <SocialMedias/>
        <S.FooterText >
            <p>Rua João Evangelista nº 303  , Itapetininga-Sp </p>
                         
              <LocalMap />             
            
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

