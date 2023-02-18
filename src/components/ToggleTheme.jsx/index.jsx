import React from 'react'
import { useTheme } from "next-themes";
import * as S from './style'
import { Sun, Moon } from 'phosphor-react'



export const ToggleTheme = () => {
  const { theme, setTheme } = useTheme()  


  return (
    <>


            <S.StyledButton onClick={() => setTheme('dark')}> <Moon color='#000' size={15} /></S.StyledButton>
         
            <S.StyledButton2 onClick={() => setTheme('light')}><Sun color='#fff' size={15} /></S.StyledButton2>
      
    </>
  )
}
